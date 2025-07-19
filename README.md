# 🛡️ Cyber Safe – Phishing Detection and Web Safety Browser Extension

Cyber Safe is a lightweight, cross-browser extension designed to protect users from phishing attacks in real time. By using the Google Safe Browsing API and SSL/TLS certificate validation, the extension identifies malicious or suspicious websites and immediately notifies users with a clear, easy-to-understand pop-up alert.

---

## 📌 Project Overview

Phishing remains one of the most prevalent cybersecurity threats. Cyber Safe aims to reduce user risk by:

- Scanning the active tab's URL.
- Verifying SSL/TLS certificates.
- Cross-checking against Google Safe Browsing API.
- Instantly notifying users about suspicious websites.
- Promoting awareness through safe browsing tips.

---

## 🎯 Features

✅ Real-time URL scanning  
✅ SSL/TLS certificate validation  
✅ Google Safe Browsing API integration  
✅ Instant phishing alerts via pop-up  
✅ Cross-browser compatibility (Chrome, Firefox, Edge, etc.)  
✅ Lightweight and user-friendly design  
✅ No personal data collected  

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **APIs**: 
  - [Google Safe Browsing API](https://developers.google.com/safe-browsing)
  - [CertSpotter API](https://sslmate.com/certspotter/)
- **Development Tools**: Visual Studio Code, Chrome Developer Tools, Postman
- **Browser Support**: Chrome, Firefox, Edge, Brave, Opera

---

## 📦 Project Structure

Cyber-Safe/
│
├── manifest.json # Extension metadata and permissions
├── background.js # Core logic and API calls
├── popup.html # Popup interface layout
├── popup.js # UI logic and alert handling
├── popup.css # Styling for the popup

## 🚀 How It Works

1. **URL Fetching**: Captures the current URL of the active tab.
2. **Verification**:
   - Checks the URL against Google's Safe Browsing database.
   - Verifies the site’s SSL/TLS certificate.
3. **Alert Mechanism**:
   - If a site is flagged as malicious or has an invalid certificate, a warning pop-up is shown.
   - Safe websites get a green status message for user reassurance.

## 🧪 Security Measures

- Google Safe Browsing URL validation
- CertSpotter SSL/TLS certificate verification
- Whitelisting trusted URLs to reduce false positives
- Pop-up warnings for unsafe websites
- Privacy-focused: **No data storage or tracking**

## 📈 Future Enhancements

- 🤖 **Machine Learning**: Advanced detection using ML-based phishing classifiers
- 📱 **Mobile Browser Support**: Extend compatibility to mobile platforms
- 🧑‍💻 **User Reporting**: Let users report suspicious websites
- 📊 **Admin Dashboard**: Track flagged URLs and monitor phishing trends

---

## 👩‍💻 Contributors

- Drashti Shah  
- Priyanshu Khambalkar  
- Kahan Velani  
- Dhruv Parmar  

**Mentor**: Dr. Tejas Bhatt

---

## 📚 References

- [Google Safe Browsing API](https://developers.google.com/safe-browsing)
- [CertSpotter API](https://sslmate.com/certspotter/)
- [OWASP Phishing Resources](https://owasp.org/www-community/attacks/Phishing)
- [APWG Phishing Trends Report](https://apwg.org/trendsreports/)

---

## 📃 License

This project is for educational purposes under the guidance of GLS University. All rights reserved by the authors.

---
