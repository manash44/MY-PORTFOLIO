#!/bin/bash

# Netlify Build Script for Manash Portfolio
# This script handles the build process for the Angular portfolio website

echo "🚀 Starting build process for Manash Portfolio..."

# Install dependencies for the main project
echo "📦 Installing main project dependencies..."
npm install

# Install dependencies for the frontend
echo "📦 Installing frontend dependencies..."
cd portfolio-frontend
npm install

# Build the Angular application
echo "🔨 Building Angular application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: portfolio-frontend/dist/portfolio-frontend"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Build process completed!"
