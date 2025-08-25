# Images Folder

This folder contains all images used in the portfolio website.

## Folder Structure

```
images/
├── projects/          # Project screenshots and images
├── profile/           # Profile pictures and personal images
├── backgrounds/       # Background images and textures
├── icons/            # Custom icons and logos
└── README.md         # This file
```

## Usage

### Project Images
- **Location**: `images/projects/`
- **Naming**: Use descriptive names like `telemedicine-platform.jpg`, `pulmonary-device.png`
- **Formats**: JPG, PNG, WebP (recommended for better performance)
- **Sizes**: Optimize for web (max 800px width for project screenshots)

### Profile Images
- **Location**: `images/profile/`
- **Naming**: `profile.jpg`, `avatar.png`, etc.
- **Formats**: JPG, PNG
- **Sizes**: Square format recommended (400x400px)

### Background Images
- **Location**: `images/backgrounds/`
- **Naming**: `hero-bg.jpg`, `section-bg.png`, etc.
- **Formats**: JPG, PNG, WebP
- **Sizes**: Optimize for different screen sizes

### Icons
- **Location**: `images/icons/`
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
<img src="assets/images/projects/telemedicine-platform.jpg" alt="Telemedicine Platform">

<!-- Profile image -->
<img src="assets/images/profile/profile.jpg" alt="Manash Deori">

<!-- Background image in CSS -->
background-image: url('/assets/images/backgrounds/hero-bg.jpg');
```

## Current Project Images Needed

Based on the portfolio projects:
- `telemedicine-platform.jpg` - Telemedicine Platform screenshot
- `pulmonary-device.jpg` - Pulmonary Assessment Device image
- `healthcare-analytics.jpg` - Healthcare Analytics Platform screenshot
- `visionaid-app.jpg` - VisionAid App screenshot
- `expense-tracker.jpg` - Expense Budget Tracker screenshot
- `cyberwatch.jpg` - CyberWatch Suite screenshot
