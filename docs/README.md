<div align="center">

# <img height="35" src="https://raw.githubusercontent.com/elonsucks/elonsucks.org/master/public/favicon-150.png"> Why ElonSucks.org
A curated collection of documented reasons and sources

| [![MIT License](https://img.shields.io/badge/License-MIT-fc4f2d.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/elonsucks/why.elonsucks.org/blob/main/LICENSE)[![Code Quality](https://img.shields.io/codefactor/grade/github/elonsucks/why.elonsucks.org?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=b5fc7b&style=for-the-badge)](https://www.codefactor.io/repository/github/elonsucks/why.elonsucks.org) [![Vulnerabilities](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Delonsucks_why.elonsucks.org%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=elonsucks_why.elonsucks.org) [![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/) [![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwhy.elonsucks.org&style=for-the-badge&label=Website&up_message=online&down_message=offline)](https://why.elonsucks.org)  |
|-----------|
| <div align="center"> <a href="https://why.elonsucks.org"><code>Visit Site</code></a> • <a href="https://github.com/elonsucks/why.elonsucks.org/issues"><code>Report Issue</code></a> • <a href="https://github.com/elonsucks/why.elonsucks.org/issues/new"><code>Suggest</code></a> </div>|
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
<!--- [Tech Stack](#-tech-stack) -->
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Contributing](#-contributing)
  - [Adding New Content](#adding-new-content)
  - [Code Contributions](#code-contributions)
  - [Content Guidelines](#content-guidelines)
<!--- [Project Structure](#-project-structure) -->
- [Deployment](#-deployment)
- [License](#-license)
- [Community](#-community)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Why ElonSucks.org** is an open-source, community-driven repository that aggregates documented articles, reports, and sources related to controversial actions and statements. The project aims to provide transparent, fact-based information by collecting reputable sources in one accessible location.

> **Mission**: To maintain a well-sourced, transparent collection of information that allows people to form their own informed opinions based on documented facts.

### Why This Exists

In an era of information overload, this project serves as a centralized, community-maintained resource that:

- ✅ Prioritizes **credible sources** from established journalism
- ✅ Maintains **transparency** through open-source collaboration
- ✅ Enables **easy fact-checking** with direct source links
- ✅ Encourages **critical thinking** and independent research

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 **Comprehensive Database**
Curated collection of articles from reputable news sources, organized and searchable.

### 🌐 **Open Source**
Fully transparent codebase that anyone can review, fork, or contribute to.

</td>
<td width="50%">

### ⚡ **Fast & Reliable**
Built with modern web technologies and deployed on Cloudflare's global network.

### 👥 **Community-Driven**
Accepts contributions from anyone who wants to add verified sources.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Structure |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Functionality |
| ![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white) | Data Storage |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white) | Hosting & CDN |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Git** - [Download & Install Git](https://git-scm.com/downloads)
- **A Code Editor** - We recommend [VS Code](https://code.visualstudio.com/)
- **A Modern Browser** - Chrome, Firefox, Edge, or Safari

### Installation

```bash
# Clone the repository
git clone https://github.com/elonsucks/why.elonsucks.org.git

# Navigate to the project directory
cd why.elonsucks.org
```

### Development

Since this is a static website, you can simply open the HTML files in your browser or use a local server:

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

**Option 2: Using Node.js**
```bash
# Install a simple server (one-time)
npm install -g http-server

# Run the server
http-server

# Then visit http://localhost:8080
```

**Option 3: Using VS Code**
- Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Right-click on `index.html` and select "Open with Live Server"

---

## 🤝 Contributing

We welcome contributions from everyone! There are several ways you can help:

### Adding New Content

The **easiest way** to contribute is by adding new source URLs:

1. **Fork** this repository
2. **Edit** the file: [`assets/data/urls.json`](https://github.com/elonsucks/why.elonsucks.org/blob/main/assets/data/urls.json)
3. **Add your source** following the existing JSON structure:

```json
{
  "title": "Clear, Descriptive Title",
  "url": "https://reputable-source.com/article",
  "source": "Publication Name",
  "date": "YYYY-MM-DD",
  "category": "Appropriate Category"
}
```

4. **Create a Pull Request** with a clear description of what you're adding

> 💡 **Quick Edit**: You can edit `urls.json` directly on GitHub by clicking the pencil icon!

### Code Contributions

Want to improve the website itself? Here's how:

```bash
# 1. Fork and clone your fork
git clone https://github.com/YOUR-USERNAME/why.elonsucks.org.git

# 2. Create a new branch
git checkout -b feature/your-feature-name

# 3. Make your changes and test thoroughly

# 4. Commit your changes
git commit -m "Add: Brief description of your changes"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

### Content Guidelines

<details>
<summary><b>📌 Click to expand guidelines</b></summary>

<br>

To maintain quality and credibility, please ensure:

#### ✅ Do's
- **Use reputable sources**: Major news outlets, verified journalists, official documents
- **Include publication dates**: Always specify when the article was published
- **Be objective**: Let the sources speak for themselves
- **Check for duplicates**: Search existing entries before adding
- **Provide context**: Use descriptive titles that summarize the content

#### ❌ Don'ts
- **No opinion pieces without clear labeling**: Distinguish between news and opinion
- **No unverified claims**: All content must be from credible sources
- **No personal attacks**: Focus on documented actions and statements
- **No broken links**: Verify URLs work before submitting
- **No editorializing titles**: Keep titles factual and descriptive

</details>

---

## 🚀 Deployment

This site is automatically deployed via **Cloudflare Pages**:

- **Production**: Every push to `main` branch triggers a deployment
- **Preview**: Pull requests generate preview deployments
- **URL**: [why.elonsucks.org](https://why.elonsucks.org)

### Deploy Your Own Fork

1. Sign up for [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Configure build settings:
   - **Build command**: (none needed - static site)
   - **Build output directory**: `/`
4. **Deploy! 🎉**

---

## 📜 License

**Copyright © 2023–2025 [ElonSucks.org](https://elonsucks.org)**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

### What This Means

<table>
<tr>
<td width="33%" align="center">

### ✅ You Can

**Use** commercially  
**Modify** freely  
**Distribute** widely  
**Sublicense** as needed

</td>
<td width="33%" align="center">

### ⚠️ You Must

**Include** copyright notice  
**Include** license text  
**State** changes made

</td>
<td width="33%" align="center">

### ❌ Limitation

**No warranty** provided  
**No liability** accepted  
Use at your **own risk**

</td>
</tr>
</table>

<details>
<summary><b>📄 Full MIT License Text</b></summary>

<br>

```
MIT License

Copyright (c) 2023-2025 ElonSucks.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

---

## 🌟 Community

<div align="center">

### Join the Conversation

[![GitHub Issues](https://img.shields.io/github/issues/elonsucks/why.elonsucks.org?style=for-the-badge&logo=github)](https://github.com/elonsucks/why.elonsucks.org/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/elonsucks/why.elonsucks.org?style=for-the-badge&logo=github)](https://github.com/elonsucks/why.elonsucks.org/pulls)
[![GitHub Stars](https://img.shields.io/github/stars/elonsucks/why.elonsucks.org?style=for-the-badge&logo=github)](https://github.com/elonsucks/why.elonsucks.org/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/elonsucks/why.elonsucks.org?style=for-the-badge&logo=github)](https://github.com/elonsucks/why.elonsucks.org/network/members)

</div>

---

## 🙏 Acknowledgments

This project is made possible by:

- **Contributors**: Everyone who has added sources and improved the codebase
- **Journalists**: The reporters and news organizations whose work we reference
- **Open Source Community**: For the tools and platforms that make this possible
- **You**: For being interested in fact-based information

---

<div align="center">

### 📊 Repository Stats

![GitHub repo size](https://img.shields.io/github/repo-size/elonsucks/why.elonsucks.org?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/elonsucks/why.elonsucks.org?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/elonsucks/why.elonsucks.org?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/elonsucks/why.elonsucks.org?style=flat-square)

---

**Made with `📚` for transparency and accountability**

[⬆ Back to Top](#-why-elonsucksorg)

</div>
