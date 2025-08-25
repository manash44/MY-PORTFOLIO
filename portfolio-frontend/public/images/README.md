# Public Images Folder

This folder contains all images that are served directly by the Angular development server.

## Folder Structure

```
public/images/
├── projects/          # Project screenshots and images
├── profile/           # Profile pictures and personal images
├── backgrounds/       # Background images and textures
├── icons/            # Custom icons and logos
└── README.md         # This file
```

## Usage

### Project Images
- **Location**: `public/images/projects/`
- **Naming**: Use descriptive names like `telemedicine-platform.jpg`, `pulmonary-device.png`
- **Formats**: JPG, PNG, WebP (recommended for better performance)
- **Sizes**: Optimize for web (max 800px width for project screenshots)

### Profile Images
- **Location**: `public/images/profile/`
- **Naming**: `profile.jpg`, `avatar.png`, etc.
- **Formats**: JPG, PNG
- **Sizes**: Square format recommended (400x400px)

### Background Images
- **Location**: `public/images/backgrounds/`
- **Naming**: `hero-bg.jpg`, `section-bg.png`, etc.
- **Formats**: JPG, PNG, WebP
- **Sizes**: Optimize for different screen sizes

### Icons
- **Location**: `public/images/icons/`
- **Naming**: `logo.svg`, `custom-icon.png`, etc.
- **Formats**: SVG (preferred), PNG
- **Sizes**: Various sizes as needed

## Image Optimization

1. **Compress images** before adding them
2. **Use WebP format** when possible for better performance
3. **Provide multiple sizes** for responsive design
4. **Add alt text** in the HTML for accessibility

## Example Usage in Components

```html
<!-- Project image -->
<img src="images/projects/telemedicine-platform.jpg" alt="Telemedicine Platform">

<!-- Profile image -->
<img src="images/profile/photo.jpeg" alt="Manash Deori">

<!-- Background image in CSS -->
background-image: url('/images/backgrounds/hero-bg.jpg');
```

## Current Images

- `profile/photo.jpeg` - Manash Deori's profile photo (30KB)

## Important Notes

- Images in this folder are served directly by the Angular development server
- The path in HTML should be relative to the root (e.g., `images/profile/photo.jpeg`)
- This folder is configured in `angular.json` under the assets section
- Changes to images in this folder are immediately available without rebuilding
