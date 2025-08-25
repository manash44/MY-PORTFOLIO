# Netlify Deployment Guide

## 🚀 Quick Deploy (Drag & Drop)

### Step 1: Build your project
```bash
npm run build
```

### Step 2: Upload to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag the `portfolio-frontend/dist/portfolio-frontend/browser` folder to Netlify
3. Your site will be live instantly!

## 🔄 Continuous Deployment (Git Integration)

### Step 1: Connect GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub"
4. Select repository: `manash44/MY-PORTFOLIO`

### Step 2: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `portfolio-frontend/dist/portfolio-frontend/browser`
- **Base directory**: Leave empty

### Step 3: Deploy
Click "Deploy site" and wait for the build to complete.

## 📁 Important Notes

- ✅ Upload ONLY the `browser` folder contents
- ✅ The `browser` folder contains your built Angular app
- ✅ Netlify config files are already included
- ✅ Your site will be live at: `https://your-site-name.netlify.app`

## 🔧 Troubleshooting

### If build fails:
1. Check that all dependencies are in `package.json`
2. Ensure Node.js version is 18 or higher
3. Check build logs in Netlify dashboard

### If site doesn't load:
1. Verify `_redirects` file is in the upload folder
2. Check that `index.html` is in the root of the upload folder
3. Ensure all assets (CSS, JS, images) are included

## 🎉 Success!
Your portfolio will be live and automatically update when you push to GitHub!
