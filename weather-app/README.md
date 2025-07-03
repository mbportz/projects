
# 🌤️ SkyCast Weather App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Tech: HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![Tech: CSS3 (Sass)](https://img.shields.io/badge/CSS3%20%7C%20Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)]()
[![Tech: JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Tech: jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)]()
[![Build: Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)]()
[![CI: GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)]()
[![Deploy: Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)]()

---

## 📌 Description

**SkyCast** is a modern, responsive weather forecast web app built for quick, clear daily weather info.
It shows real-time weather conditions and a 5-day forecast for any city.
Perfect for everyday users who want a lightweight, clean weather dashboard on any device.

---

## ✨ Features

- 📍 **Auto-detect location** — get local weather using the Geolocation API
- 🔎 **Search by city** — get weather for any city worldwide
- 🌤️ **Current conditions** — temperature, wind speed, humidity, feels like, visibility
- 📅 **5-day forecast cards** — easy to read at a glance
- ⚡️ **Fast and modular** — built with clean, component-based JS and Sass
- 🧩 **Bundled & optimized** — with Webpack and Babel for ES6+
- ✅ **Lint & unit tests** — automated with ESLint and Jest
- 🚀 **CI/CD pipeline** — GitHub Actions runs lint, tests, build, deploy to Vercel automatically

---

## 🛠️ Technologies & Skills Used

- **HTML5** — semantic structure
- **CSS3 + Sass (SCSS)** — modular styling
- **JavaScript (ES6)** — modern syntax, modules
- **jQuery** — DOM manipulation, AJAX
- **Webpack** — bundling and asset optimization
- **Babel** — ES6 transpilation
- **Dotenv + DefinePlugin** — secure environment variable injection
- **OpenWeather API** — real-time weather data
- **Git, GitHub** — version control
- **GitHub Actions** — CI/CD pipelines
- **Vercel** — preview deploys and production hosting
- **ESLint** — linting
- **Jest** — unit testing

---

## 🚀 Demo

👉 **Live Preview:** [skycast weather app](https://weather-app-seven-pink-53.vercel.app/)

### 📸 Screenshots

![SkyCast Screenshot](public/skycast.gif)

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── assets/
│   ├── components/
│   ├── modules/
│   ├── styles/
│   ├── index.js
│   └── index.html
├── dist/
├── .env.example
├── webpack.config.js
├── babel.config.js
├── jest.config.js
└── README.md

<!--
Note: The GitHub Actions workflow file is located in the root `.github/workflows/` directory of the monorepo, not inside the `weather-app/` folder.
-->
```

---

## 🔐 Environment Variables

This project uses **environment variables** to keep your API keys secure.

### ✅ How to use

1️⃣ Copy the example file:
\`\`\`bash
cp .env.example .env
\`\`\`

2️⃣ Fill in your real `API_KEY`:
\`\`\`env
BASE_URL=https://api.openweathermap.org/
API_KEY=YOUR_REAL_API_KEY
\`\`\`

3️⃣ **Do not commit your `.env`!**
Your `.gitignore` must include:
\`\`\`gitignore
.env
dist
node_modules
\`\`\`

✅ On Vercel & GitHub Actions, set these in your **Project → Settings → Environment Variables** or workflow secrets.

---

## 🚀 CI/CD Pipeline

**SkyCast** uses **GitHub Actions** to automate:
- ✅ Linting with ESLint
- ✅ Unit tests with Jest
- ✅ Production build with Webpack
- ✅ Deploy to **Vercel** with preview and production

Pushes to `main` trigger a production deploy.
Pull requests trigger preview deploys for easy testing.

---

## ✅ Getting Started

### Prerequisites

- Node.js (18+)
- npm

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/mbportz/projects.git

# Navigate to the weather app folder
cd projects/weather-app

# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build
npm run build
\`\`\`

---

### ✅ Run tests

\`\`\`bash
npm test
\`\`\`

---

### ✅ Lint your code

\`\`\`bash
npm run lint
\`\`\`

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first to discuss what you’d like to improve.

✅ Please run \`npm run lint\` and \`npm test\` before submitting.

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

**Built with ❤️ by MBP**

✨ *Happy coding & clear skies!* 🌤️
