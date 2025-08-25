import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Projects, Project } from '../../interfaces/portfolio.interface';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailModalComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Projects | null = null;
  selectedProject: Project | null = null;
  showModal = false;
  selectedCategory: 'all' | 'academic' | 'personal' | 'professional' = 'all';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        // Load fallback data if service fails
        this.loadFallbackProjects();
      }
    });
  }

  loadFallbackProjects() {
    // Fallback project data with enhanced structure
    this.projects = {
      academic: [
        {
          id: 1,
          name: 'Expense Budget Tracker (E.B.T)',
          shortDescription: 'A user-friendly application for efficient expense budget tracking.',
          longDescription: 'E.B.T is a comprehensive financial management application that helps users track expenses, set budgets, and generate detailed financial reports. The application features intuitive data visualization, expense categorization, and export capabilities. It provides insights into spending patterns and helps users achieve their financial goals.',
          technologies: ['C++', 'Qt Framework', 'SQLite', 'Data Analysis', 'Financial Management'],
          image: 'assets/images/projects/ebt.jpg',
          features: [
            'Expense categorization',
            'Budget setting and monitoring',
            'Financial reporting',
            'Data visualization',
            'Export capabilities',
            'Multi-currency support',
            'Recurring expense tracking'
          ],
          softwareSpecifications: [
            'Cross-platform compatibility (Windows, macOS, Linux)',
            'SQLite database for local storage',
            'CSV/PDF export functionality',
            'Chart generation capabilities',
            'Data backup and restore',
            'Password protection'
          ],
          links: {
            github: 'https://github.com/manash/expense-tracker',
            demo: 'https://youtube.com/watch?v=ebt-demo'
          },
          category: 'academic',
          status: 'completed',
          startDate: '2022-03-01',
          endDate: '2022-08-15',
          teamSize: 1,
          role: 'Solo Developer'
        },
        {
          id: 2,
          name: 'CyberWatch - Integrated Cybersecurity Suite',
          shortDescription: 'A comprehensive cybersecurity application addressing cyber law-related issues.',
          longDescription: 'CyberWatch is a comprehensive cybersecurity suite designed to address modern cyber threats and legal compliance requirements. The application provides real-time threat detection, security assessment tools, and educational resources for understanding cybersecurity best practices. It includes modules for incident response, legal compliance guidelines, and security awareness training.',
          technologies: ['Java', 'Spring Boot', 'MySQL', 'Cybersecurity', 'Web Security', 'Legal Compliance'],
          image: 'assets/images/projects/cyberwatch.jpg',
          features: [
            'Cybersecurity threat detection',
            'Legal compliance guidelines',
            'Security assessment tools',
            'Educational resources',
            'Incident response protocols',
            'Real-time monitoring dashboard',
            'Automated security reports'
          ],
          softwareSpecifications: [
            'Java 11+ runtime environment',
            'MySQL 8.0+ database',
            'Minimum 4GB RAM',
            'SSL/TLS encryption support',
            'Multi-factor authentication',
            'Audit logging system'
          ],
          links: {
            github: 'https://github.com/manash/cyberwatch',
            live: 'https://cyberwatch-demo.com',
            documentation: 'https://cyberwatch-docs.com'
          },
          category: 'academic',
          status: 'completed',
          startDate: '2022-09-01',
          endDate: '2023-01-15',
          teamSize: 1,
          role: 'Solo Developer'
        }
      ],
      personal: [
        {
          id: 3,
          name: 'VisionAid App',
          shortDescription: 'An innovative Android application designed to assist visually impaired individuals.',
          longDescription: 'VisionAid is a comprehensive Android application that leverages cutting-edge computer vision technology to assist visually impaired individuals in their daily activities. The app uses YOLOv3 object detection to identify objects in real-time, provides audio feedback through text-to-speech, and offers haptic feedback for tactile interaction. It also includes posture detection capabilities to help users maintain proper posture during extended use.',
          technologies: ['Python', 'Kivy', 'YOLOv3', 'Android', 'Text-to-Speech API', 'Computer Vision'],
          image: 'assets/images/projects/visionaid.jpg',
          features: [
            'Real-time object detection using YOLOv3',
            'Text-to-speech audio feedback',
            'Haptic feedback for tactile interaction',
            'Posture detection and correction',
            'Accessible user interface',
            'Offline functionality for core features',
            'Customizable sensitivity settings'
          ],
          softwareSpecifications: [
            'Android 8.0+ compatibility',
            'Minimum 3GB RAM requirement',
            'Camera access for object detection',
            'Microphone access for voice commands',
            'Vibration motor for haptic feedback',
            'GPS for location-based features'
          ],
          links: {
            github: 'https://github.com/manash/visionaid-app',
            demo: 'https://youtube.com/watch?v=visionaid-demo',
            documentation: 'https://visionaid-docs.com'
          },
          category: 'personal',
          status: 'completed',
          startDate: '2023-01-15',
          endDate: '2023-06-30',
          teamSize: 1,
          role: 'Solo Developer'
        }
      ],
      professional: [
        {
          id: 4,
          name: 'Telemedicine Platform',
          shortDescription: 'A comprehensive telemedicine platform for patient online/offline consultation and lab test booking.',
          longDescription: 'A full-featured telemedicine platform that enables virtual consultations, patient monitoring, and healthcare analytics. The platform includes video conferencing, electronic health records, appointment scheduling, secure messaging, and lab test booking functionality. It provides healthcare providers with tools for remote patient care and analytics for improving patient outcomes. The system supports both online and offline consultation modes with comprehensive reporting capabilities.',
          technologies: ['React.js', 'Node.js', 'Python', 'WebRTC', 'Healthcare', 'Telemedicine', 'Lab Integration'],
          image: 'assets/images/projects/telemedicine.jpg',
          features: [
            'Virtual consultations (online/offline)',
            'Lab test booking and management',
            'Patient monitoring and reports',
            'Healthcare analytics',
            'Secure data transmission',
            'Mobile accessibility',
            'Electronic health records',
            'Appointment scheduling',
            'Comprehensive reporting system'
          ],
          softwareSpecifications: [
            'HIPAA compliant data storage',
            'WebRTC for video calls',
            'Real-time messaging system',
            'Mobile responsive design',
            'Multi-platform support',
            'Integration with EHR systems',
            'Lab management integration'
          ],
          links: {
            github: 'https://github.com/manash/telemedicine-platform',
            live: 'https://telemedicine-demo.com',
            documentation: 'https://telemedicine-docs.com'
          },
          category: 'professional',
          status: 'completed',
          startDate: '2023-07-01',
          endDate: '2024-01-15',
          teamSize: 1,
          role: 'Solo Developer'
        },
        {
          id: 5,
          name: 'Pulmonary Assessment Device',
          shortDescription: 'Medical device for pulmonary patient assessment through lung function testing.',
          longDescription: 'A sophisticated medical device that combines hardware sensors with AI-powered software for comprehensive pulmonary assessment. The device measures various lung function parameters and provides detailed analysis for healthcare professionals. It includes features for patient data management, trend analysis, and integration with hospital systems.',
          technologies: ['C++', 'Python', 'Hardware Integration', 'AI/ML', 'Medical Devices'],
          image: 'assets/images/projects/pulmonary.jpg',
          features: [
            'Lung function testing',
            'Parameter evaluation',
            'AI-powered diagnostics',
            'Hardware integration',
            'Clinical data analysis',
            'Patient data management',
            'Trend analysis and reporting'
          ],
          softwareSpecifications: [
            'Real-time sensor data processing',
            'AI model for diagnostic assistance',
            'Secure patient data storage',
            'Integration with hospital systems',
            'Calibration and maintenance tools',
            'Multi-language support'
          ],
          links: {
            github: 'https://github.com/manash/pulmonary-device',
            documentation: 'https://pulmonary-device-docs.com'
          },
          category: 'professional',
          status: 'completed',
          startDate: '2022-01-01',
          endDate: '2022-12-31',
          teamSize: 1,
          role: 'Solo Developer'
        },
        {
          id: 6,
          name: 'Healthcare Analytics Platform',
          shortDescription: 'Healthcare reporting apps and portals for clinical data visualization and analytics.',
          longDescription: 'A comprehensive healthcare analytics platform that provides clinical data visualization, performance reporting, and real-time monitoring capabilities. The platform helps healthcare providers and administrators make data-driven decisions to improve patient outcomes and operational efficiency. It includes customizable dashboards, automated reporting features, and predictive analytics for healthcare insights.',
          technologies: ['Power BI', 'MySQL', 'Python', 'Data Visualization', 'Healthcare Analytics'],
          image: 'assets/images/projects/healthcare-analytics.jpg',
          features: [
            'Clinical data visualization',
            'Healthcare analytics',
            'Performance reporting',
            'Dashboard customization',
            'Real-time monitoring',
            'Automated reporting',
            'Predictive analytics'
          ],
          softwareSpecifications: [
            'Power BI Pro licensing',
            'MySQL 8.0+ database',
            'Python 3.8+ for data processing',
            'Real-time data integration',
            'Role-based access control',
            'Automated backup systems'
          ],
          links: {
            live: 'https://healthcare-analytics-demo.com',
            documentation: 'https://healthcare-analytics-docs.com'
          },
          category: 'professional',
          status: 'completed',
          startDate: '2021-06-01',
          endDate: '2022-03-31',
          teamSize: 1,
          role: 'Solo Developer'
        }
      ]
    };
  }

  onImageError(event: any) {
    // Fallback to placeholder image if project image fails to load
    event.target.src = 'assets/images/project-placeholder.jpg';
  }

  openGitHub(project: Project) {
    if (project.links?.github) {
      window.open(project.links.github, '_blank');
    }
  }

  openLiveDemo(project: Project) {
    if (project.links?.live) {
      window.open(project.links.live, '_blank');
    }
  }

  openDemo(project: Project) {
    if (project.links?.demo) {
      window.open(project.links.demo, '_blank');
    }
  }

  openProjectDetail(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetail() {
    this.showModal = false;
    this.selectedProject = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  getAllProjects(): Project[] {
    if (!this.projects) return [];
    
    return [
      ...this.projects.academic,
      ...this.projects.personal,
      ...this.projects.professional
    ];
  }

  getProjectsByCategory(category: 'academic' | 'personal' | 'professional'): Project[] {
    if (!this.projects) return [];
    
    switch (category) {
      case 'academic':
        return this.projects.academic;
      case 'personal':
        return this.projects.personal;
      case 'professional':
        return this.projects.professional;
      default:
        return [];
    }
  }
}
