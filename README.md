# Manash Protim Deori - Personal Portfolio

A dynamic, modern, and visually appealing personal portfolio website built with Angular and Node.js.

## 🚀 Features

- **Modern Design**: Clean, professional layout with green and white theme
- **Responsive**: Mobile-friendly design that works on all devices
- **Smooth Animations**: Fade-ins, hover effects, and scroll reveals
- **Interactive Components**: Dynamic content loading and form handling
- **Glassmorphism**: Modern UI with glass-like effects
- **Full-Stack**: Angular frontend with Node.js/Express backend

## 🛠️ Tech Stack

### Frontend
- **Angular 17** - Modern frontend framework
- **SCSS** - Advanced CSS with variables and mixins
- **TypeScript** - Type-safe JavaScript
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
manash-portfolio/
├── backend/                 # Node.js backend
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
├── portfolio-frontend/      # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # Angular components
│   │   │   ├── services/   # API services
│   │   │   └── interfaces/ # TypeScript interfaces
│   │   └── styles.scss     # Global styles
│   └── package.json        # Frontend dependencies
└── package.json            # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manash-portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your email credentials
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start:
- Backend server on `http://localhost:3000`
- Frontend development server on `http://localhost:4200`

### Production Build

1. **Build the Angular application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📋 Sections

### 1. Hero Section
- Full-screen introduction with animated background
- Professional summary and call-to-action buttons
- Interactive profile card with tech stack overlay

### 2. About Section
- Personal background and education
- Key achievements and highlights
- Professional summary

### 3. Experience Section
- Timeline-style professional journey
- Company details and technologies used
- Responsive timeline layout

### 4. Projects Section
- Academic projects (E.B.T, CyberWatch, VisionAid)
- Personal projects (Telemedicine, Healthcare Analytics)
- Interactive project cards with technologies

### 5. Skills Section
- Programming languages with skill levels
- Web development technologies
- Database and visualization tools
- Soft skills with icons

### 6. Certifications Section
- Professional certifications display
- Issuer information and years
- Interactive certification cards

### 7. Contact Section
- Contact form with validation
- Contact information display
- Email integration

## 🎨 Design Features

- **Color Scheme**: Green (#2E7D32) and white theme
- **Typography**: Modern, clean fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Glassmorphism**: Modern glass-like card effects
- **Responsive**: Mobile-first responsive design

## 🔧 Customization

### Colors
Edit the CSS variables in `src/styles.scss`:
```scss
:root {
  --primary-green: #2E7D32;
  --light-green: #4CAF50;
  --dark-green: #1B5E20;
  --accent-green: #66BB6A;
  // ... other colors
}
```

### Content
Update the data in `backend/server.js` API endpoints:
- Profile information
- Experience details
- Project descriptions
- Skills and certifications

### Styling
Modify component-specific styles in their respective `.scss` files.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend (Angular)
1. Build the application: `npm run build`
2. Deploy the `dist/portfolio-frontend/browser` folder to your hosting service

### Backend (Node.js)
1. Set up environment variables
2. Deploy to platforms like Heroku, Vercel, or DigitalOcean

## 📧 Contact Form

The contact form is integrated with Nodemailer. Configure your email settings in the backend `.env` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Manash Protim Deori**
- Email: manash.deori@example.com
- Location: Guwahati, Assam, India

---

Built with ❤️ using Angular and Node.js
