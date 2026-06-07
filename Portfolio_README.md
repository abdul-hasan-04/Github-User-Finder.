# 🚀 GitHub User Finder

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/API-GitHub-181717?style=for-the-badge&logo=github)

**A modern GitHub profile search application built with Vanilla JavaScript and the GitHub REST API.**

</div>

---

## 📖 Overview

GitHub User Finder allows users to search for GitHub profiles and instantly access public account information such as repositories, followers, following, bio, location, and more.

Built as a practical project for learning:

- API Integration
- Async JavaScript
- DOM Manipulation
- Error Handling
- Responsive Design

---

# ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 User Search
Search any public GitHub user by username.

### 👤 Profile Information
Display avatar, name, bio, company, and location.

### 📊 Statistics
View followers, following, and repository counts.

### ⚡ Real-Time API Data
Fetches live information directly from GitHub.

</td>
<td width="50%">

### 🚨 Error Handling
Gracefully handles invalid usernames and API errors.

### ⏳ Loading States
Provides feedback while data is being fetched.

### 📱 Responsive Design
Optimized for desktop, tablet, and mobile devices.

### 🔗 Quick Navigation
Direct access to GitHub profiles and repositories.

</td>
</tr>
</table>

---

# 🖼️ Screenshots

> Add your screenshots inside a `/screenshots` folder.

## Desktop View

```text
screenshots/
├── desktop-home.png
├── desktop-result.png
├── mobile-view.png
└── error-state.png
```

### Home Page

```md
![Home Page](./screenshots/desktop-home.png)
```

### Search Result

```md
![Search Result](./screenshots/desktop-result.png)
```

### Mobile View

```md
![Mobile View](./screenshots/mobile-view.png)
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript (ES6+) | Functionality |
| Fetch API | HTTP Requests |
| GitHub REST API | User Data |

---

# 🏗️ Project Structure

```text
project/
│
├── index.html
├── style.css
├── main.js
│
├── screenshots/
│   ├── desktop-home.png
│   ├── desktop-result.png
│   └── mobile-view.png
│
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/github-user-finder.git
```

### Navigate to Project

```bash
cd github-user-finder
```

### Run Project

Open:

```bash
index.html
```

Or start a local server:

```bash
npx live-server
```

---

# 🌐 API Endpoint

```javascript
https://api.github.com/users/{username}
```

Example:

```javascript
https://api.github.com/users/octocat
```

---

# 📚 What I Learned

This project strengthened my understanding of:

- DOM Manipulation
- Event Handling
- Fetch API
- Async/Await
- Error Handling
- Dynamic Rendering
- Responsive Web Design
- Working with External APIs

---

# 🚧 Future Improvements

- Dark Mode
- Search History
- User Favorites
- Repository Listing
- GitHub Organizations
- Contribution Statistics
- Advanced Filtering
- Repository Language Charts

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

# 👨‍💻 Author

**Abdala**

Aspiring Frontend Developer passionate about building modern, responsive, and user-focused web applications.

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

📢 Share it with other developers

---

# 📄 License

This project is licensed under the MIT License.
