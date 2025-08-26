const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from Angular build
app.use(express.static(path.join(__dirname, '../portfolio-frontend/dist/portfolio-frontend/browser')));

// In-memory data storage (in production, use a database)
let portfolioData = {
  profile: {
    name: 'Manash Protim Deori',
    title: 'Software Engineer & Tech Lead',
    summary: 'Innovative IT graduate with expertise in software development, web design, data analysis, and healthcare tech solutions. Skilled in C++, Java, Python, Power BI, and Excel, with experience in telemedicine apps, medical device integration, and healthcare analytics. Strong leadership and problem-solving abilities with a record of delivering impactful solutions.',
    email: 'manashchariyadeori@gmail.com',
    phone: '8638123971',
    address: 'Narayanpur, North Lakhimpur, Assam, PIN-784164',
    image: '/assets/images/profile.jpg'
  },
  experience: [
    {
      id: 1,
      title: 'Software Engineer & Tech Lead',
      company: 'Respirit Healthcare Pvt. Ltd.',
      period: 'Present',
      description: 'Lead the design and development of telemedicine applications for remote healthcare delivery. Oversee company website management and custom web application development. Design and maintain healthcare reporting apps and portals for clinical data visualization and analytics. Lead technical development of a medical device for pulmonary patient assessment through lung function testing and parameter evaluation. Coordinate with cross-functional teams to integrate hardware, software, and AI systems for enhanced diagnostics. Mentor junior developers and manage project timelines using Agile methodologies.',
      technologies: ['Python', 'React.js', 'Node.js', 'MongoDB', 'AI/ML', 'Agile']
    }
  ],
  projects: {
    academic: [
      {
        id: 1,
        name: 'Expense Budget Tracker (E.B.T)',
        description: 'Developed a user-friendly application for efficient expense budget tracking.',
        technologies: ['Java', 'MySQL', 'Swing'],
        image: 'images/projects/expensebudgettracker.jpg'
      },
      {
        id: 2,
        name: 'CyberWatch: An Integrated Cybersecurity Suite',
        description: 'Spearheaded development of an application addressing cyber law-related issues.',
        technologies: ['Python', 'Cybersecurity', 'Network Security'],
        image: 'images/projects/cyberwatch.jpg'
      },
      {
        id: 3,
        name: 'VisionAid App',
        description: 'Developed an Android app using Kivy to assist visually impaired individuals with object detection (YOLOv3), text-to-speech feedback, haptic feedback, and posture detection.',
        features: [
          'Object detection using YOLOv3',
          'Text-to-speech functionality',
          'Haptic feedback system',
          'Posture detection and correction'
        ],
        technologies: ['Python', 'Kivy', 'YOLOv3', 'coco.names', 'Text-to-Speech API'],
        image: 'images/projects/visionaidai.jpg'
      }
    ],
    personal: [
      {
        id: 4,
        name: 'Telemedicine Platform',
        description: 'A comprehensive telemedicine solution for remote healthcare consultations.',
        technologies: ['React.js', 'Node.js', 'WebRTC', 'MongoDB'],
        image: 'images/projects/telemedcineplatform.jpg'
      },
      {
        id: 5,
        name: 'Medical Device Integration Platform',
        description: 'Platform for integrating various medical devices and healthcare data analytics.',
        technologies: ['Python', 'IoT', 'Data Analytics', 'Healthcare APIs'],
        image: 'images/projects/healthcareanalyticai.jpg'
      },
      {
        id: 6,
        name: 'AI Healthcare Analytics',
        description: 'AI-powered healthcare data analytics platform for predictive insights.',
        technologies: ['Python', 'Machine Learning', 'Power BI', 'SQL'],
        image: 'images/projects/healthcareanalyticai.jpg'
      }
    ]
  },
  skills: {
    programming: [
      { name: 'C++', level: 85 },
      { name: 'Java', level: 90 },
      { name: 'Python', level: 95 }
    ],
    webDevelopment: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'JSP/Servlet', level: 80 },
      { name: '.NET', level: 75 },
      { name: 'React.js', level: 85 }
    ],
    database: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Hadoop', level: 75 },
      { name: 'Hive', level: 70 }
    ],
    visualization: [
      { name: 'Power BI', level: 85 },
      { name: 'Excel', level: 90 }
    ],
    tools: [
      { name: 'Figma', level: 80 },
      { name: 'Balsamiq', level: 85 }
    ],
    softSkills: [
      'Problem-solving',
      'Teamwork',
      'Adaptability',
      'Time Management',
      'Attention to Detail',
      'Presentation Skills',
      'Leadership'
    ]
  },
  certifications: [
    {
      id: 1,
      name: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy — NIIT Foundation',
      year: 'Aug 2024',
      image: '/assets/images/cisco-cert.png'
    },
    {
      id: 2,
      name: 'Database Technologies',
      issuer: 'NIELIT (MySQL, MongoDB, Hadoop, Hive)',
      year: 'Apr-Jun 2023',
      image: '/assets/images/nielit-cert.png'
    },
    {
      id: 3,
      name: 'UI/UX Designing & Wireframes',
      issuer: 'Balsamiq, Figma',
      year: '2023',
      image: '/assets/images/uiux-cert.png'
    },
    {
      id: 4,
      name: 'Data Analysis',
      issuer: 'Excel, MySQL, Python, Power BI',
      year: '2023',
      image: '/assets/images/data-cert.png'
    },
    {
      id: 5,
      name: 'Power BI Workshop',
      issuer: 'Power BI',
      year: 'Jan 2024',
      image: '/assets/images/powerbi-cert.png'
    }
  ]
};

// Portfolio data API endpoints
app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/certifications', (req, res) => {
  res.json(portfolioData.certifications);
});

// Admin API endpoints for updating data
app.put('/api/admin/profile', (req, res) => {
  try {
    portfolioData.profile = { ...portfolioData.profile, ...req.body };
    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
});

app.put('/api/admin/experience', (req, res) => {
  try {
    portfolioData.experience = req.body;
    res.json({ success: true, message: 'Experience updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update experience' });
  }
});

app.put('/api/admin/projects', (req, res) => {
  try {
    portfolioData.projects = req.body;
    res.json({ success: true, message: 'Projects updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update projects' });
  }
});

app.put('/api/admin/skills', (req, res) => {
  try {
    portfolioData.skills = req.body;
    res.json({ success: true, message: 'Skills updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update skills' });
  }
});

app.put('/api/admin/certifications', (req, res) => {
  try {
    portfolioData.certifications = req.body;
    res.json({ success: true, message: 'Certifications updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update certifications' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // For demo purposes, just return success
    // In production, you would configure email sending
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Serve Angular app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../portfolio-frontend/dist/portfolio-frontend/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
