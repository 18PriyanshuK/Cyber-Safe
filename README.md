<div align="center">
```
 ██████╗██╗   ██╗██████╗ ███████╗██████╗      ███████╗ █████╗ ███████╗███████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗     ██╔════╝██╔══██╗██╔════╝██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝     ███████╗███████║█████╗  █████╗  
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗     ╚════██║██╔══██║██╔══╝  ██╔══╝  
╚██████╗   ██║   ██████╔╝███████╗██║  ██║     ███████║██║  ██║██║     ███████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝
```
 
### Phishing Detection and Web Safety Browser Extension
 
*Real-time URL scanning and phishing detection — right in your browser.*
 
<br/>
<img src="https://img.shields.io/badge/JavaScript-ES6-f7df1e?style=for-the-badge&logo=javascript&logoColor=black&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/HTML5-Structure-e34f26?style=for-the-badge&logo=html5&logoColor=white&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/CSS3-Styles-1572b6?style=for-the-badge&logo=css3&logoColor=white&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/Chrome-Extension-4285f4?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=1a1a2e"/>
<img src="https://img.shields.io/badge/Google-Safe%20Browsing%20API-34a853?style=for-the-badge&logo=google&logoColor=white&labelColor=1a1a2e"/>
<br/><br/>
 
</div>

---

## 🛡️ What is Cyber-Safe?

**Cyber-Safe** is a lightweight Chrome browser extension that protects users from phishing attacks and malicious websites in real time. As you browse the web, Cyber-Safe silently monitors the URLs you visit and instantly alerts you if a site is flagged as unsafe, suspicious, or a known phishing domain — before you interact with it.

Built for everyday users, Cyber-Safe requires no technical knowledge to operate. A single click on the extension icon reveals the safety status of the current page, giving you immediate peace of mind or a clear warning to stay away.

---

## ✨ Features

- 🔍 **Real-Time URL Scanning** — Analyses the current page URL instantly on visit
- ⚠️ **Phishing Detection** — Flags known phishing domains and suspicious URL patterns
- 🚨 **Instant Alerts** — Clear visual warnings displayed before user interaction
- 🖱️ **One-Click Check** — Simple popup interface — click the icon, see the result
- 🌐 **Google Safe Browsing API** — Powered by Google's threat intelligence database
- ⚡ **Lightweight** — Minimal footprint, no slowdown to your browser
- 🔒 **Privacy Focused** — Only checks URLs, no personal data collected

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| JavaScript (ES6) | Core extension logic and URL analysis |
| HTML5 | Popup interface structure |
| CSS3 | Popup styling and visual alerts |
| Chrome Extensions API | Browser integration and tab management |
| Google Safe Browsing API | URL threat intelligence and phishing database |

---

## 📁 Project Structure

```
Cyber-Safe/
│
├── manifest.json         # Extension manifest — permissions and metadata
├── popup.html            # Popup UI shown when extension icon is clicked
├── popup.js              # Core logic — URL extraction, API calls, alert display
├── styles.css            # Popup styling — safe/warning/danger states
├── README.md             # Project documentation
│
└── icons/                # Extension icons
    ├── icon16.png        # 16×16 toolbar icon
    ├── icon48.png        # 48×48 extension manager icon
    └── icon128.png       # 128×128 Chrome Web Store icon
```

---

## 🧠 How It Works

```
User visits a website
        │
        ▼
Cyber-Safe captures the current tab URL
        │
        ▼
URL is checked against suspicious pattern indicators
        │
        ▼
URL is sent to Google Safe Browsing API
        │
        ├── SAFE      →  Green indicator — "This site appears safe"
        ├── SUSPICIOUS →  Yellow warning — "Proceed with caution"
        └── UNSAFE    →  Red alert — "Potential phishing site detected"
```

Cyber-Safe inspects URLs using two layers of protection:

**Layer 1 — Pattern Analysis**
The extension checks the URL against known phishing indicators — suspicious subdomains, misleading domain names, URL encoding tricks, and other common phishing patterns used to impersonate legitimate websites.

**Layer 2 — Google Safe Browsing**
The URL is verified against Google's Safe Browsing threat database, which contains millions of known malicious, phishing, and deceptive URLs updated in real time.

---

## ⚙️ Installation

### From Source (Developer Mode)

**1. Clone the repository:**
```bash
git clone https://github.com/18PriyanshuK/Cyber-Safe.git
cd Cyber-Safe
```

**2. Open Chrome and navigate to:**
```
chrome://extensions
```

**3. Enable Developer Mode:**
Toggle **Developer mode** switch in the top-right corner.

**4. Load the extension:**
Click **Load unpacked** → Select the `Cyber-Safe` project folder.

**5. Pin the extension:**
Click the puzzle icon in Chrome toolbar → Pin Cyber-Safe for quick access.

✅ Cyber-Safe is now active and protecting your browsing.

---

## ▶️ Usage

**1.** Visit any website you want to check.

**2.** Click the **Cyber-Safe icon** in the Chrome toolbar.

**3.** The popup displays one of three states:

| Status | Indicator | Meaning |
|--------|-----------|---------|
| ✅ Safe | 🟢 Green | Site appears legitimate and safe |
| ⚠️ Suspicious | 🟡 Yellow | Proceed with caution — unusual patterns detected |
| 🚨 Unsafe | 🔴 Red | Phishing or malicious site — do not proceed |

---

## ⚠️ Important Notes

- An active internet connection is required for Google Safe Browsing API verification.
- Cyber-Safe is a protective aid — not a substitute for full antivirus or endpoint security software.
- The extension checks URLs only — it does not scan page content or collect any personal data.
- For maximum protection, keep the extension updated to receive the latest threat pattern definitions.

---

## 👥 Team

| Name | Role |
|------|------|
| Priyanshu Khambalkar | Developer |
| Drashti Shah | Developer |
| Kahan Velani | Developer |
| Dhruv Parmar | Developer |

**Faculty Mentor:** Dr. Tejas Bhatt

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome.

```bash
# Fork the repository
git fork https://github.com/18PriyanshuK/Cyber-Safe.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add: your feature description"

# Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## 🔮 Future Enhancements

- [ ] Support for Firefox and Edge browsers
- [ ] Offline phishing pattern database (no API dependency)
- [ ] Detailed threat report with reason for flagging
- [ ] Whitelist trusted domains
- [ ] Real-time warning banner injected directly on dangerous pages
- [ ] Chrome Web Store publishing

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Priyanshu Khambalkar**

---

<div align="center">

*Built with JavaScript · Chrome Extensions API · Google Safe Browsing*

⭐ **Star this repo if it helped keep you safer online**

</div>
