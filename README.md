# CnatGPT 🌐

**CnatGPT** is a free, open-source tool that helps users turn vague or unclear ideas into well-structured prompts for ChatGPT and other AI models. With just a few clicks, users can generate clear, optimized prompts — ready to copy, paste, and get better results from their AI interactions.

> ✨ Perfect for anyone who struggles to express exactly what they want from an AI.

## 🔍 What it does

- Converts messy thoughts or needs into clear and precise prompts.
- Adds helpful context and constraints to get more accurate AI responses.
- Built with a simple, clean, mobile-friendly UI using HTML, Tailwind CSS, and JavaScript.

Try it live 👉 [cnatgpt.com](https://cnatgpt.com)

---

## 🛠 Tech Stack

- HTML5
- Tailwind CSS
- Vanilla JavaScript

---

## 📱 Installable app (PWA)

CnatGPT can be installed on the phone's home screen and works offline (generating and copying prompts; opening ChatGPT needs a connection).

- `manifest.webmanifest` — app name, icons and colors.
- `sw.js` — service worker. The page is fetched network-first; CSS, fonts and icons are cache-first.
- **When you change any file listed in `PRECACHE` inside `sw.js` (CSS, fonts, icons), bump `CACHE_VERSION`** so installed apps pick up the new version. Changes to `index.html` alone don't need a bump.
- Icon sources are `public/icons/icon.svg` and `public/icons/icon-maskable.svg`.
- Service workers need `http://localhost` or HTTPS, so test locally with `python3 -m http.server` instead of opening the file directly.

---

## 🤝 Contributing

We welcome contributors of all experience levels! Whether you're a developer, designer, or just someone with great ideas, your help is appreciated.

### Ways to contribute:

- Report bugs or suggest features via [Issues](https://github.com/Romulo-Almeida/cnatgpt/issues)
- Submit a Pull Request with improvements or new features
- Improve UI/UX or accessibility
- Help with translations or documentation

### To get started:

```bash
# Clone the repository
git clone https://github.com/Romulo-Almeida/cnatgpt.git

# Open index.html in your browser
