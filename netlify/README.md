# Netlify Deployment Configuration

This folder contains all the necessary configuration files for deploying your Manash Portfolio website to Netlify.

## 📁 Files Overview

- **`netlify.toml`** - Main Netlify configuration file
- **`_redirects`** - URL redirects for Angular SPA routing
- **`_headers`** - HTTP headers for security and caching
- **`build.sh`** - Custom build script (optional)
- **`README.md`** - This documentation file

## 🚀 Deployment Instructions

### Method 1: Drag & Drop (Recommended)

1. Build your Angular project locally:
   ```bash
   npm run build
   ```

2. Navigate to the build output directory:
   ```bash
   cd portfolio-frontend/dist/portfolio-frontend
   ```

3. Copy the contents of this `netlify` folder into the build output directory

4. Drag the entire `portfolio-frontend/dist/portfolio-frontend` folder to Netlify's deploy area

### Method 2: Git Integration

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)

2. Connect your repository to Netlify

3. Configure the build settings in Netlify:
   - **Build command**: `npm run build`
   - **Publish directory**: `portfolio-frontend/dist/portfolio-frontend`
   - **Base directory**: `.` (root of your repository)

4. Deploy!

## ⚙️ Configuration Details

### Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `portfolio-frontend/dist/portfolio-frontend`
- **Node Version**: 18.x

### SPA Routing
The configuration includes redirects to handle Angular's client-side routing:
- All routes (`/*`) redirect to `/index.html` with a 200 status
- This ensures your Angular routes work correctly

### Security Headers
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information

### Caching Strategy
- **Static assets** (images, CSS, JS): 1 year cache
- **Fonts**: 1 year cache
- **HTML files**: No cache (for SPA updates)

## 🔧 Customization

### Environment Variables
Add environment variables in Netlify's dashboard:
- Go to Site settings > Environment variables
- Add any API keys or configuration values your app needs

### Custom Domain
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

### Form Handling
If your portfolio has contact forms, Netlify can handle them automatically:
- Forms are processed by Netlify's form service
- No additional configuration needed for basic forms

## 🐛 Troubleshooting

### Build Failures
1. Check the build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Routing Issues
1. Ensure `_redirects` file is in the publish directory
2. Check that `netlify.toml` redirects are configured correctly

### Performance Issues
1. Verify caching headers are working
2. Check image optimization
3. Review bundle size in build logs

## 📞 Support

For issues with:
- **Netlify**: Check [Netlify documentation](https://docs.netlify.com/)
- **Angular**: Check [Angular documentation](https://angular.io/docs)
- **This configuration**: Review this README or check the configuration files

## 🔄 Updates

To update your deployment:
1. Make changes to your code
2. Commit and push to your repository (if using Git integration)
3. Or rebuild locally and drag the new build folder to Netlify

---

**Last updated**: $(date)
**Configuration version**: 1.0
