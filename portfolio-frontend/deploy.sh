#!/bin/bash

echo "🚀 Building portfolio for production..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output: dist/portfolio-frontend/browser"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Go to your Netlify dashboard"
echo "2. Set build command: npm run build"
echo "3. Set publish directory: dist/portfolio-frontend/browser"
echo "4. Deploy!"
echo ""
echo "📋 Or use Netlify CLI:"
echo "netlify deploy --prod --dir=dist/portfolio-frontend/browser"
