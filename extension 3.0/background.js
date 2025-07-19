// Replace with your actual VirusTotal API key
const VIRUS_TOTAL_API_KEY = "39486ebd35b073b43cfcec4b48d66082d2ed2edb8cb4c6aa8f71ab3f58affaae"; 
const VIRUS_TOTAL_URL = "https://www.virustotal.com/api/v3/urls";

// Function to fetch SSL/TLS certificate information
function fetchCertificateInfo(tabId, url) {
  fetch(`https://api.certspotter.com/v1/issuances?domain=${url}`)
    .then(response => response.json())
    .then(data => {
      const certificateDetails = data.length > 0 ? {
        issuer: data[0].issuer,
        validFrom: data[0].not_before,
        validUntil: data[0].not_after,
        subject: data[0].subject,
        signatureAlgorithm: data[0].signature_algorithm
      } : null;

      chrome.tabs.sendMessage(tabId, {
        action: 'certificateInfo',
        certificateInfo: certificateDetails
      });
    })
    .catch(error => {
      console.error('Error fetching certificate:', error);
      chrome.tabs.sendMessage(tabId, {
        action: 'certificateInfo',
        certificateInfo: { error: error.message }
      });
    });
}

// Function to check URL using VirusTotal API
function checkPhishingStatus(tabId, url) {
  const urlEncoded = encodeURIComponent(url);
  const formData = new FormData();
  formData.append('url', url);
  
  fetch(VIRUS_TOTAL_URL, {
    method: "POST",
    headers: {
      "x-apikey": VIRUS_TOTAL_API_KEY
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    const analysisId = data.data.id;
    return getAnalysisResults(analysisId, tabId, url);
  })
  .catch(error => {
    console.error("VirusTotal API submission error:", error);
    // Send a default response to avoid hanging
    chrome.tabs.sendMessage(tabId, {
      action: "phishingStatus",
      isPhishing: false,
      checkedUrl: url
    });
  });
}

// Function to get analysis results from VirusTotal
function getAnalysisResults(analysisId, tabId, url) {
  fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
    method: "GET",
    headers: {
      "x-apikey": VIRUS_TOTAL_API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    // If analysis is still pending, wait and try again
    if (data.data.attributes.status === "queued") {
      setTimeout(() => getAnalysisResults(analysisId, tabId, url), 2000);
      return;
    }
    
    // Check malicious detections
    const stats = data.data.attributes.stats;
    const isPhishing = stats.malicious > 0 || stats.suspicious > 0;
    
    chrome.tabs.sendMessage(tabId, {
      action: "phishingStatus",
      isPhishing: isPhishing,
      checkedUrl: url
    });
  })
  .catch(error => {
    console.error("VirusTotal API analysis error:", error);
    // Send a default response to avoid hanging
    chrome.tabs.sendMessage(tabId, {
      action: "phishingStatus",
      isPhishing: false,
      checkedUrl: url
    });
  });
}

// Trigger pop-up automatically and check URL
chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.action.openPopup();
  const url = new URL(details.url).hostname;
  fetchCertificateInfo(details.tabId, url);
  checkPhishingStatus(details.tabId, details.url);
});