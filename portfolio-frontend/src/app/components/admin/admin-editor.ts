import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Profile, Experience, Projects, Skills, Certification } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-admin-editor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-editor.html',
  styleUrl: './admin-editor.scss'
})
export class AdminEditorComponent implements OnInit {
  activeTab = 'profile';
  profile: Profile | null = null;
  experience: Experience[] = [];
  projects: Projects | null = null;
  skills: Skills | null = null;
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.portfolioService.getProfile().subscribe(data => this.profile = data);
    this.portfolioService.getExperience().subscribe(data => this.experience = data);
    this.portfolioService.getProjects().subscribe(data => this.projects = data);
    this.portfolioService.getSkills().subscribe(data => this.skills = data);
    this.portfolioService.getCertifications().subscribe(data => this.certifications = data);
  }

  saveProfile() {
    if (this.profile) {
      this.portfolioService.updateProfile(this.profile).subscribe({
        next: (response) => {
          alert('Profile updated successfully!');
        },
        error: (error) => {
          console.error('Error updating profile:', error);
          alert('Failed to update profile. Please try again.');
        }
      });
    }
  }

  saveExperience() {
    this.portfolioService.updateExperience(this.experience).subscribe({
      next: (response) => {
        alert('Experience updated successfully!');
      },
      error: (error) => {
        console.error('Error updating experience:', error);
        alert('Failed to update experience. Please try again.');
      }
    });
  }

  saveProjects() {
    if (this.projects) {
      this.portfolioService.updateProjects(this.projects).subscribe({
        next: (response) => {
          alert('Projects updated successfully!');
        },
        error: (error) => {
          console.error('Error updating projects:', error);
          alert('Failed to update projects. Please try again.');
        }
      });
    }
  }

  saveSkills() {
    if (this.skills) {
      this.portfolioService.updateSkills(this.skills).subscribe({
        next: (response) => {
          alert('Skills updated successfully!');
        },
        error: (error) => {
          console.error('Error updating skills:', error);
          alert('Failed to update skills. Please try again.');
        }
      });
    }
  }

  saveCertifications() {
    this.portfolioService.updateCertifications(this.certifications).subscribe({
      next: (response) => {
        alert('Certifications updated successfully!');
      },
      error: (error) => {
        console.error('Error updating certifications:', error);
        alert('Failed to update certifications. Please try again.');
      }
    });
  }

  addExperience() {
    this.experience.push({
      id: this.experience.length + 1,
      title: '',
      company: '',
      period: '',
      description: '',
      technologies: []
    });
  }

  removeExperience(index: number) {
    this.experience.splice(index, 1);
  }

  addCertification() {
    this.certifications.push({
      id: this.certifications.length + 1,
      name: '',
      issuer: '',
      year: '',
      image: ''
    });
  }

  removeCertification(index: number) {
    this.certifications.splice(index, 1);
  }
}
