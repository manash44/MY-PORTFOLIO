import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  experience: string;
  projects: string[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  activeCategory = 'programming';
  selectedSkill: Skill | null = null;
  showSkillDetails = false;

  skillCategories = [
    { id: 'programming', name: 'Programming Languages', icon: 'fas fa-code' },
    { id: 'web', name: 'Web Development', icon: 'fas fa-globe' },
    { id: 'database', name: 'Database Technologies', icon: 'fas fa-database' },
    { id: 'data', name: 'Data Analysis & Visualization', icon: 'fas fa-chart-bar' },
    { id: 'design', name: 'UI/UX Design', icon: 'fas fa-palette' },
    { id: 'tools', name: 'Tools & Technologies', icon: 'fas fa-tools' },
    { id: 'soft', name: 'Soft Skills', icon: 'fas fa-users' }
  ];

  skills: Skill[] = [
    // Programming Languages
    {
      name: 'C++',
      level: 85,
      category: 'programming',
      description: 'Advanced proficiency in C++ programming with experience in system programming, algorithms, and data structures.',
      experience: '4+ years',
      projects: ['Pulmonary Assessment Device', 'Expense Budget Tracker', 'System Programming'],
      icon: 'fab fa-cpp'
    },
    {
      name: 'Java',
      level: 80,
      category: 'programming',
      description: 'Strong Java development skills with experience in enterprise applications, web services, and Android development.',
      experience: '3+ years',
      projects: ['CyberWatch Suite', 'Web Applications', 'Enterprise Solutions'],
      icon: 'fab fa-java'
    },
    {
      name: 'Python',
      level: 90,
      category: 'programming',
      description: 'Expert-level Python programming with focus on AI/ML, data analysis, web development, and automation.',
      experience: '4+ years',
      projects: ['VisionAid App', 'Healthcare Analytics', 'AI/ML Solutions'],
      icon: 'fab fa-python'
    },

    // Web Development
    {
      name: 'HTML/CSS',
      level: 85,
      category: 'web',
      description: 'Proficient in modern HTML5 and CSS3 with responsive design, animations, and accessibility standards.',
      experience: '4+ years',
      projects: ['Company Websites', 'Web Applications', 'Responsive Design'],
      icon: 'fab fa-html5'
    },
    {
      name: 'JavaScript',
      level: 80,
      category: 'web',
      description: 'Strong JavaScript skills including ES6+, DOM manipulation, and modern web development practices.',
      experience: '3+ years',
      projects: ['Web Applications', 'Interactive UI', 'Frontend Development'],
      icon: 'fab fa-js-square'
    },
    {
      name: 'React.js',
      level: 75,
      category: 'web',
      description: 'Experience with React.js for building modern, scalable web applications and user interfaces.',
      experience: '2+ years',
      projects: ['Telemedicine Platform', 'Web Applications', 'UI Components'],
      icon: 'fab fa-react'
    },
    {
      name: 'JSP/Servlet',
      level: 70,
      category: 'web',
      description: 'Knowledge of Java Server Pages and Servlets for server-side web development.',
      experience: '2+ years',
      projects: ['Web Applications', 'Server-side Development'],
      icon: 'fas fa-server'
    },
    {
      name: '.NET',
      level: 65,
      category: 'web',
      description: 'Experience with .NET framework for web application development and enterprise solutions.',
      experience: '2+ years',
      projects: ['Web Applications', 'Enterprise Solutions'],
      icon: 'fab fa-microsoft'
    },

    // Database Technologies
    {
      name: 'MySQL',
      level: 85,
      category: 'database',
      description: 'Expert in MySQL database design, optimization, and management for web applications.',
      experience: '4+ years',
      projects: ['Healthcare Analytics', 'Web Applications', 'Data Management'],
      icon: 'fas fa-database'
    },
    {
      name: 'MongoDB',
      level: 75,
      category: 'database',
      description: 'Experience with MongoDB NoSQL database for scalable data storage and management.',
      experience: '2+ years',
      projects: ['Healthcare Applications', 'Data Storage', 'Analytics'],
      icon: 'fas fa-leaf'
    },
    {
      name: 'Hadoop',
      level: 70,
      category: 'database',
      description: 'Knowledge of Hadoop ecosystem for big data processing and distributed computing.',
      experience: '1+ years',
      projects: ['Big Data Processing', 'Data Analytics'],
      icon: 'fas fa-cloud'
    },
    {
      name: 'Hive',
      level: 65,
      category: 'database',
      description: 'Experience with Apache Hive for data warehousing and SQL-like queries on Hadoop.',
      experience: '1+ years',
      projects: ['Data Warehousing', 'Big Data Analytics'],
      icon: 'fas fa-warehouse'
    },

    // Data Analysis & Visualization
    {
      name: 'Power BI',
      level: 85,
      category: 'data',
      description: 'Expert in Power BI for data visualization, business intelligence, and healthcare analytics.',
      experience: '3+ years',
      projects: ['Healthcare Analytics', 'Business Intelligence', 'Data Visualization'],
      icon: 'fas fa-chart-line'
    },
    {
      name: 'MS Excel',
      level: 90,
      category: 'data',
      description: 'Advanced Excel skills including data analysis, pivot tables, VBA, and complex formulas.',
      experience: '4+ years',
      projects: ['Data Analysis', 'Financial Modeling', 'Reporting'],
      icon: 'fas fa-file-excel'
    },

    // UI/UX Design
    {
      name: 'Figma',
      level: 75,
      category: 'design',
      description: 'Experience with Figma for UI/UX design, prototyping, and collaborative design workflows.',
      experience: '2+ years',
      projects: ['UI/UX Design', 'Prototyping', 'Design Systems'],
      icon: 'fab fa-figma'
    },
    {
      name: 'Balsamiq',
      level: 80,
      category: 'design',
      description: 'Proficient in Balsamiq for wireframing and rapid prototyping of user interfaces.',
      experience: '3+ years',
      projects: ['Wireframing', 'Prototyping', 'UI Design'],
      icon: 'fas fa-pencil-ruler'
    },

    // Tools & Technologies
    {
      name: 'Agile/Scrum',
      level: 85,
      category: 'tools',
      description: 'Experience with Agile methodologies and Scrum framework for project management.',
      experience: '3+ years',
      projects: ['Project Management', 'Team Leadership', 'Development Process'],
      icon: 'fas fa-tasks'
    },
    {
      name: 'Cybersecurity',
      level: 75,
      category: 'tools',
      description: 'Knowledge of cybersecurity principles, tools, and best practices for secure development.',
      experience: '2+ years',
      projects: ['CyberWatch Suite', 'Security Assessment', 'Compliance'],
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'AI Tools',
      level: 70,
      category: 'tools',
      description: 'Experience with AI/ML tools and frameworks for intelligent application development.',
      experience: '2+ years',
      projects: ['VisionAid App', 'Medical Diagnostics', 'AI Integration'],
      icon: 'fas fa-robot'
    },
    {
      name: 'Linux (Ubuntu)',
      level: 75,
      category: 'tools',
      description: 'Proficient in Linux Ubuntu for development, server management, and system administration.',
      experience: '3+ years',
      projects: ['System Administration', 'Development Environment', 'Server Management'],
      icon: 'fab fa-ubuntu'
    },

    // Soft Skills
    {
      name: 'Problem Solving',
      level: 90,
      category: 'soft',
      description: 'Strong analytical and problem-solving abilities for complex technical challenges.',
      experience: '4+ years',
      projects: ['All Projects', 'Technical Challenges', 'Innovation'],
      icon: 'fas fa-lightbulb'
    },
    {
      name: 'Teamwork',
      level: 85,
      category: 'soft',
      description: 'Excellent collaboration skills and experience leading cross-functional teams.',
      experience: '4+ years',
      projects: ['Team Leadership', 'Cross-functional Collaboration', 'Mentoring'],
      icon: 'fas fa-users'
    },
    {
      name: 'Adaptability',
      level: 80,
      category: 'soft',
      description: 'Quick learner with ability to adapt to new technologies and changing requirements.',
      experience: '4+ years',
      projects: ['Technology Adoption', 'Project Flexibility', 'Innovation'],
      icon: 'fas fa-sync-alt'
    },
    {
      name: 'Time Management',
      level: 85,
      category: 'soft',
      description: 'Strong organizational skills and ability to manage multiple projects efficiently.',
      experience: '4+ years',
      projects: ['Project Management', 'Deadline Management', 'Prioritization'],
      icon: 'fas fa-clock'
    },
    {
      name: 'Attention to Detail',
      level: 90,
      category: 'soft',
      description: 'Meticulous attention to detail ensuring high-quality deliverables and user experience.',
      experience: '4+ years',
      projects: ['Quality Assurance', 'User Experience', 'Code Quality'],
      icon: 'fas fa-search'
    },
    {
      name: 'Presentation Skills',
      level: 80,
      category: 'soft',
      description: 'Effective communication and presentation skills for technical and non-technical audiences.',
      experience: '4+ years',
      projects: ['Client Presentations', 'Team Communication', 'Documentation'],
      icon: 'fas fa-presentation'
    }
  ];

  getSkillsByCategory(categoryId: string): Skill[] {
    return this.skills.filter(skill => skill.category === categoryId);
  }

  setActiveCategory(categoryId: string) {
    this.activeCategory = categoryId;
    this.selectedSkill = null;
    this.showSkillDetails = false;
  }

  showSkillDetail(skill: Skill) {
    this.selectedSkill = skill;
    this.showSkillDetails = true;
  }

  hideSkillDetail() {
    this.selectedSkill = null;
    this.showSkillDetails = false;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.showSkillDetails) {
      this.hideSkillDetail();
    }
  }

  getActiveCategoryName(): string {
    const category = this.skillCategories.find(c => c.id === this.activeCategory);
    return category ? category.name : '';
  }
}
