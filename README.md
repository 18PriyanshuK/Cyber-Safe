# 🛡️ Cyber-Safe - Phishing Detection and Web Safety Browser Extension

**Cyber-Safe** is a browser extension that helps detect and warn users about potentially malicious or phishing websites. By checking URLs and analysing basic threat indicators, the extension aims to improve user safety and reduce the risk of interacting with harmful web pages.

---

## 🚀 Features

- Scans the current website URL  
- Detects potentially unsafe or phishing links  
- Displays alerts and warnings  
- Simple and intuitive pop-up interface  
- Lightweight and easy to install

---

## 🛠️ Tech Stack

- **Languages:** JavaScript, HTML, CSS  
- **Platform:** Chrome (or Chromium-based browsers) extension  
- **APIs:** Google Safe Browsing / URL checks (if configured)

---

## 📁 Project Structure

```text
Cyber-Safe/
├── manifest.json         # Extension manifest
├── popup.html            # Popup UI
├── popup.js              # Main extension logic
├── styles.css            # UI styles
├── README.md             # This documentation
└── icons/                # Action icons for extension
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/18PriyanshuK/Cyber-Safe.git
```

2. Open Chrome (or any Chromium browser).

3. Go to `chrome://extensions`.

4. Enable **Developer mode** (top right).

5. Click **Load unpacked** and select the project folder.

6. The extension should now be installed.

---

## ▶️ Usage

1. Click the Cyber-Safe extension icon in the toolbar.

2. Visit any website you want to check.

3. The extension will analyse the URL and show warnings if the site appears unsafe.

---

## 🧠 How It Works

Cyber-Safe inspects the current page’s URL and compares it to known indicators of unsafe or phishing links (via API/logic). If the URL matches suspicious patterns or is flagged by a checking service, a warning alert is shown to the user.

---

## ⚠️ Notes

- A working internet connection may be required for URL verification if an external API is used.  
- This is a basic protective tool — not a substitute for full antivirus or threat protection services.

---

## 🤝 Contributing

- Drashti Shah  
- Priyanshu Khambalkar  
- Kahan Velani  
- Dhruv Parmar  

**Mentor**: Dr. Tejas Bhatt

Contributions are welcome!  
Feel free to fork the project and submit pull requests for enhancements, bug fixes, or new features.

---

## 📜 License

This project currently does not use any license. Feel free to modify for personal or educational use. For commercial/redistribution, please seek consent.

---

## 👤 Author

**Priyanshu Khambalkar**  
GitHub: https://github.com/18PriyanshuK

