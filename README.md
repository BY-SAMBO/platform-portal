# Bootcamp Platform Portal

A single-page web app for SSO login and future dashboard, using Logto as Identity Provider.

## Features
- Custom-branded Logto SSO login (OIDC/OAuth2)
- Ready for group/project-based dashboards
- Clean, extensible structure for future features

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/platform-portal.git
cd platform-portal
```

### 2. Local Development
You can open `public/index.html` directly in your browser, or run a local server:
```bash
# With Python 3
cd public
python -m http.server 8080
# Or with Node.js
yarn global add serve
serve .
```

### 3. Configure Logto
Edit `public/index.html` and replace the Logto config with your endpoint and appId.

### 4. Deploy
- **GitHub Pages:** Push to `main` branch, set `public/` as the source.
- **Vercel/Netlify:** Import repo, set `public/` as root directory.

## Project Structure
```
platform-portal/
  public/
    index.html
  .gitignore
  README.md
```

## License
MIT
