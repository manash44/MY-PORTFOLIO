import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  description: string;
  highlights: string[];
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'North Eastern Hill University, Shillong',
      duration: 'August 2019 – August 2023',
      cgpa: '7.55',
      description: 'Comprehensive IT education covering software development, database management, web technologies, and computer science fundamentals.',
      highlights: [
        'Software Development and Programming',
        'Database Management Systems',
        'Web Technologies and Design',
        'Computer Networks and Security',
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Software Engineering Principles',
        'Project Management and Teamwork'
      ],
      icon: 'fas fa-graduation-cap'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Cisco Networking Academy Cybersecurity Essentials',
      issuer: 'NIIT Foundation',
      date: 'August 2024',
      description: 'Comprehensive cybersecurity training covering essential security concepts, threat detection, and network protection strategies.',
      tags: ['Cybersecurity', 'Network Security', 'Threat Detection'],
      icon: 'fas fa-shield-alt'
    },
    {
      name: '200-hour Industry-oriented Course on Database Technologies',
      issuer: 'NIELIT',
      date: 'April - June 2023',
      description: 'Intensive training program covering MySQL, MongoDB, Hadoop, and Hive for comprehensive database management and big data processing.',
      tags: ['MySQL', 'MongoDB', 'Hadoop', 'Hive'],
      icon: 'fas fa-database'
    },
    {
      name: 'UI/UX Designing & Wireframes',
      issuer: 'Professional Training',
      date: '2023',
      description: 'Specialized training in UI/UX design principles, wireframing techniques, and design tools including Balsamiq and Figma.',
      tags: ['UI/UX Design', 'Balsamiq', 'Figma', 'Wireframing'],
      icon: 'fas fa-palette'
    },
    {
      name: 'Data Analysis using Excel, MySQL, Python, and Power BI',
      issuer: 'Professional Training',
      date: '2023',
      description: 'Comprehensive data analysis training covering multiple tools and technologies for business intelligence and data visualization.',
      tags: ['Data Analysis', 'Excel', 'MySQL', 'Python', 'Power BI'],
      icon: 'fas fa-chart-bar'
    },
    {
      name: 'Power BI Workshop',
      issuer: 'Professional Training',
      date: 'January 2024',
      description: 'Hands-on workshop focused on Power BI for data visualization, business intelligence, and interactive dashboard creation.',
      tags: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Dashboards'],
      icon: 'fas fa-chart-line'
    }
  ];
}
