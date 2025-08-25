# Netlify Deployment Guide

## 🚀 Quick Deploy

### Option 1: Netlify Dashboard
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git" or "Add new site"
3. Connect your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/portfolio-frontend/browser`
5. Click "Deploy site"

### Option 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist/portfolio-frontend/browser
```

## ⚙️ Configuration Files

### `netlify.toml`
- Configures build settings and redirects
- Handles Angular client-side routing
- Sets Node.js version to 18

### `public/_redirects`
- Redirects all routes to `index.html`
- Fixes 404 errors on direct route access
- Essential for Angular SPA routing

## 🔧 Build Process

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

3. **Build output:**
   - Location: `dist/portfolio-frontend/browser/`
   - Contains: `index.html`, JS bundles, CSS, assets

## 🐛 Troubleshooting

### 404 Errors
- Ensure `public/_redirects` file exists
- Check `netlify.toml` configuration
- Verify publish directory is correct

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript/SCSS errors

### Image Loading Issues
- Images are served from `public/images/`
- Verify image paths in components
- Check file permissions

## 📁 File Structure
```
portfolio-frontend/
├── dist/portfolio-frontend/browser/  # Build output
├── public/
│   ├── _redirects                    # Netlify redirects
│   └── images/                       # Static images
├── src/
│   └── app/                          # Angular components
├── netlify.toml                      # Netlify config
└── angular.json                      # Angular config
```

## 🌐 Environment Variables
- No environment variables required for basic deployment
- Add any API keys or configs in Netlify dashboard if needed

## 🔄 Continuous Deployment
- Connect your Git repository to Netlify
- Automatic deployments on push to main branch
- Preview deployments for pull requests
