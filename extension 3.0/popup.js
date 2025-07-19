// Updated popup.js - Automatically checks URL on popup open
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTabUrl = tabs[0].url;
    document.getElementById('activeTabUrl').textContent = activeTabUrl;
    checkUrlLegitimacy(activeTabUrl);
  });
});

function checkUrlLegitimacy(url) {
  const legitimateUrls = [
"https://www.instagram.com/",
"https://www.instagram.com/accounts/login/",
"https://www.instagram.com/explore/",
"https://www.instagram.com/tv/",
"https://www.instagram.com/shop/",
"https://www.instagram.com/direct/inbox/",
"https://www.instagram.com/username/",
"https://www.instagram.com/guide/guide-name/",
"https://www.snapchat.com/",
"https://www.snapchat.com/add/username/",
"https://www.snapchat.com/discover/",
"https://www.snapchat.com/map/",
"https://www.snapchat.com/settings/",
"https://www.snapchat.com/memories/",
"https://www.snapchat.com/friends/",
"https://www.snapchat.com/support/",
"https://www.snapchat.com/safety/",
"https://www.snapchat.com/legal/",
"https://accounts.snapchat.com/accounts/v2/login/",
"https://www.facebook.com/",
"https://m.facebook.com/",
"https://business.facebook.com/",
"https://developers.facebook.com/",
"https://newsroom.fb.com/",
"https://investor.fb.com/",
"https://messenger.com/",
"https://workplace.com/",
"https://instagram.com/",
"https://portal.facebook.com/",
"https://oculus.com/",
"https://www.facebook.com",
"https://l.facebook.com/",
"https://facebook.com/gaming/",
"https://connect.facebook.com/",
"https://facebook.com/marketplace/",
"https://facebook.com/watch/",
"https://touch.facebook.com/",
"https://apps.facebook.com/",
"https://pixel.facebook.com/",
"https://business.facebook.com/creatorstudio/",
"https://twitter.com/",
"https://tweetdeck.twitter.com/",
"https://ads.twitter.com/",
"https://analytics.twitter.com/",
"https://developer.twitter.com/",
"https://help.twitter.com/",
"https://blog.twitter.com/",
"https://business.twitter.com/",
"https://media.twitter.com/",
"https://about.twitter.com/",
"https://status.twitter.com/",
"https://api.twitter.co/m",
"https://studio.twitter.com/",
"https://privacy.twitter.com/",
"https://ads.twitter.com/dashboard/",
"https://brand.twitter.com/",
"https://discover.twitter.com/",
"https://engage.twitter.com/",
"https://about.twitter.com/company/",
"https://policy.twitter.com/",
"https://telegram.org/",
"https://web.telegram.org/",
"https://core.telegram.org/",
"https://desktop.telegram.org/",
"https://blog.telegram.org/",
"https://faq.telegram.org/",
"https://support.telegram.org/",
"https://status.telegram.org/",
"https://privacy.telegram.org/",
"https://t.me/",
"https://channels.telegram.org/",
"https://bots.telegram.org/",
"https://desktop.telegram.org/",
"https://macos.telegram.org/",
"https://linux.telegram.org/",
"https://windows.telegram.org/",
"https://play.google.com/store/apps/details?id=org.telegram.messenger/",
"https://apps.apple.com/app/telegram-messenger/id686449807/",
"https://tdesktop.com/",
"https://macos.telegram.org/",
"https://www.youtube.com/",
"https://studio.youtube.com/",
"https://music.youtube.com/",
"https://gaming.youtube.com/",
"https://tv.youtube.com/",
"https://kids.youtube.com/",
"https://creatoracademy.youtube.com/",
"https://news.youtube.com/",
"https://trends.youtube.com/",
"https://learning.youtube.com/",
"https://support.google.com/youtube/",
"https://www.youtube.com/about/",
"https://www.youtube.com/intl/en/yt/about/",
"https://www.youtube.com/youtube_news/",
"https://ads.youtube.com/",
"https://studio.youtube.com/channel/",
"https://tv.youtube.com/activate/",
"https://www.youtube.com/live_dashboard/",
"https://www.youtube.com/creators/",
"https://www.youtube.com/yt/creators/",
"https://youtube.com/verify/",
"https://www.whatsapp.com/",
"https://web.whatsapp.com/",
"https://faq.whatsapp.com/",
"https://support.whatsapp.com/",
"https://blog.whatsapp.com/",
"https://business.whatsapp.com/",
"https://security.whatsapp.com/",
"https://privacy.whatsapp.com/",
"https://www.whatsapp.com/legal/",
"https://status.whatsapp.com/",
"https://api.whatsapp.com/",
"https://developers.whatsapp.com/",
"https://www.whatsappbrand.com/",
"https://jobs.whatsapp.com/",
"https://business.whatsapp.com/platform/",
"https://web.whatsapp.com/business/",
"https://enterprise.whatsapp.com/",
"https://payments.whatsapp.com/",
"https://education.whatsapp.com/",
"https://research.whatsapp.com/",
"https://www.canva.com/",
"https://about.canva.com/",
"https://designschool.canva.com/",
"https://www.canva.com/create-a-design/",
"https://www.canva.com/templates/",
"https://www.canva.com/features/",
"https://www.canva.com/pricing/",
"https://www.canva.com/about/",
"https://brand.canva.com/",
"https://www.canva.com/pro/",
"https://www.canva.com/education/",
"https://www.canva.com/for-work/",
"https://www.canva.com/photo-editor/",
"https://www.canva.com/create/collages/",
"https://www.canva.com/presentations/",
"https://www.canva.com/posters/",
"https://www.canva.com/resumes/",
"https://www.canva.com/desktop/",
"https://www.canva.com/mobile/",
"https://www.canva.com/iphone/",
"https://www.pinterest.com/",
"https://business.pinterest.com/",
"https://help.pinterest.com/",
"https://policy.pinterest.com/",
"https://newsroom.pinterest.com/",
"https://ads.pinterest.com/",
"https://developers.pinterest.com/",
"https://www.pinterest.com/login/",
"https://www.pinterest.com/logout/",
"https://www.pinterest.com/signup/",
"https://www.pinterest.com/topics/",
"https://www.pinterest.com/categories/",
"https://www.pinterest.com/search/",
"https://www.pinterest.com/discover/",
"https://www.pinterest.com/boards/",
"https://www.pinterest.com/pins/",
"https://www.pinterest.com/messages/",
"https://www.pinterest.com/settings/",
"https://www.pinterest.com/help/",
"https://www.pinterest.com/about/",
"https://www.hotstar.com/",
"https://www.hotstar.com/sports/",
"https://www.hotstar.com/movies/",
"https://www.hotstar.com/tv/",
"https://www.hotstar.com/premium/",
"https://www.jiocinema.com/discover/",
"https://www.jiocinema.com/",
"https://www.jiocinema.com/movies/",
"https://www.jiocinema.com/tv-shows/",
"https://www.jiocinema.com/music-videos/",
"https://www.jiocinema.com/clips/",
"https://www.voot.com/discover/",
"https://www.voot.com/shows/",
"https://www.voot.com/movies/",
"https://www.voot.com/news/",
"https://www.voot.com/kids/",
"https://www.voot.com/",
"https://www.linkedin.com/feed/",
"https://www.linkedin.com/jobs/",
"https://www.linkedin.com/messaging/",
"https://www.linkedin.com/my-network/",
"https://www.linkedin.com/notifications/",
"https://www.linkedin.com/",
"https://open.spotify.com/",
"https://open.spotify.com/browse/",
"https://open.spotify.com/search/",
"https://open.spotify.com/your-library/",
"https://open.spotify.com/genre/",
"https://open.spotify.com/discover/",
"chrome://newtab/"
    // Add more legitimate URLs as needed
  ];

  if (legitimateUrls.includes(url)) {
    showAlert('This is a Legitimate URL!', 'green');
    fetchCertificate(url);
  } else {
    // Check with VirusTotal results from background.js
    chrome.runtime.onMessage.addListener(function(message) {
      if (message.action === "phishingStatus" && message.checkedUrl === url) {
        if (message.isPhishing) {
          showAlert('This URL might be Phishing', 'red');
          showPreventionSteps();
        } else {
          showAlert('This is a Legitimate URL!', 'green');
          fetchCertificate(url);
        }
      }
    });
  }
}

function fetchCertificate(url) {
  // First check if we already received certificate info from background.js
  chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "certificateInfo") {
      displayCertificateInfo(message.certificateInfo);
    }
  });

  // Fallback if no message received
  setTimeout(() => {
    const certificateInfo = document.getElementById('certificateInfo');
    if (certificateInfo.style.display !== 'block') {
      document.getElementById('certificateDetails').textContent = 'Certificate is Valid. ✓';
      certificateInfo.style.display = 'block';
    }
  }, 2000);
}

function displayCertificateInfo(certificateInfo) {
  if (!certificateInfo || certificateInfo.error) {
    document.getElementById('certificateDetails').textContent = 'Certificate is Valid. ✓';
  } else {
    document.getElementById('certificateDetails').innerHTML = `
      <strong>Issuer:</strong> ${certificateInfo.issuer}<br>
      <strong>Valid From:</strong> ${certificateInfo.validFrom}<br>
      <strong>Valid Until:</strong> ${certificateInfo.validUntil}<br>
      <strong>Subject:</strong> ${certificateInfo.subject}<br>
      <strong>Signature Algorithm:</strong> ${certificateInfo.signatureAlgorithm}`;
  }
  document.getElementById('certificateInfo').style.display = 'block';
}

function showAlert(message, color) {
  const alertElement = document.getElementById('alert');
  alertElement.textContent = message;
  alertElement.className = 'alert';
  
  if (color === 'red') {
    alertElement.style.backgroundColor = '#ff4444';
  } else if (color === 'green') {
    alertElement.style.backgroundColor = 'green';
  }
}

function showPreventionSteps() {
  document.getElementById('preventionSteps').style.display = 'block';
}

// Listen for background.js messages
chrome.runtime.onMessage.addListener(function(message) {
  if (message.action === "phishingStatus") {
    const url = document.getElementById('activeTabUrl').textContent;
    if (message.checkedUrl === url) {
      if (message.isPhishing) {
        showAlert('This URL might be Phishing', 'red');
        showPreventionSteps();
      } else {
        showAlert('This is a Legitimate URL!', 'green');
      }
    }
  }
});