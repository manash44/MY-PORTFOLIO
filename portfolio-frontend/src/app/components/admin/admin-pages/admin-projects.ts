import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project, Projects } from '../../../interfaces/portfolio.interface';
import { PortfolioService } from '../../../services/portfolio';

@Component({
  selector: 'app-admin-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-projects.html',
  styleUrl: './admin-projects.scss'
})
export class AdminProjectsComponent implements OnInit {
  projects: Projects | null = null;
  activeTab: 'academic' | 'personal' = 'academic';
  
  newProject = {
    name: '',
    shortDescription: '',
    longDescription: '',
    technologies: '',
    features: '',
    softwareSpecifications: '',
    image: '',
    category: 'academic' as 'academic' | 'personal' | 'professional',
    status: 'completed' as 'completed' | 'in-progress' | 'planned',
    startDate: '',
    endDate: '',
    teamSize: 1,
    role: '',
    links: {
      github: '',
      live: '',
      demo: '',
      documentation: ''
    }
  };

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
        // Initialize with empty structure if service fails
        this.projects = {
          academic: [],
          personal: [],
          professional: []
        };
      }
    });
  }

  addProject() {
    if (!this.projects || !this.newProject.name.trim()) return;

    const project: Project = {
      id: Date.now(), // Simple ID generation
      name: this.newProject.name,
      shortDescription: this.newProject.shortDescription || this.newProject.longDescription,
      longDescription: this.newProject.longDescription || this.newProject.shortDescription,
      technologies: this.newProject.technologies.split(',').map(t => t.trim()).filter(t => t),
      image: this.newProject.image,
      features: this.newProject.features.split(',').map(f => f.trim()).filter(f => f),
      softwareSpecifications: this.newProject.softwareSpecifications.split(',').map(s => s.trim()).filter(s => s),
      links: {
        github: this.newProject.links.github || undefined,
        live: this.newProject.links.live || undefined,
        demo: this.newProject.links.demo || undefined,
        documentation: this.newProject.links.documentation || undefined
      },
      category: this.newProject.category,
      status: this.newProject.status,
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate || undefined,
      teamSize: this.newProject.teamSize,
      role: this.newProject.role || undefined
    };

    if (this.activeTab === 'academic') {
      this.projects.academic.push(project);
    } else {
      this.projects.personal.push(project);
    }

    this.resetForm();
  }

  removeProject(index: number) {
    if (!this.projects) return;

    if (this.activeTab === 'academic') {
      this.projects.academic.splice(index, 1);
    } else {
      this.projects.personal.splice(index, 1);
    }
  }

  saveProjects() {
    if (!this.projects) return;

    this.portfolioService.updateProjects(this.projects).subscribe({
      next: () => {
        alert('Projects saved successfully!');
      },
      error: (error) => {
        console.error('Error saving projects:', error);
        alert('Error saving projects. Please try again.');
      }
    });
  }

  resetForm() {
    this.newProject = {
      name: '',
      shortDescription: '',
      longDescription: '',
      technologies: '',
      features: '',
      softwareSpecifications: '',
      image: '',
      category: 'academic',
      status: 'completed',
      startDate: '',
      endDate: '',
      teamSize: 1,
      role: '',
      links: {
        github: '',
        live: '',
        demo: '',
        documentation: ''
      }
    };
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      // In a real application, you would upload the file to a server
      // For now, we'll create a local URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newProject.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
