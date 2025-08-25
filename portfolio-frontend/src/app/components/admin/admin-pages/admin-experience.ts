import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio';
import { Experience } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-admin-experience',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-experience.html',
  styleUrl: './admin-experience.scss'
})
export class AdminExperienceComponent implements OnInit {
  experience: Experience[] = [];
  
  newExperience = {
    title: '',
    company: '',
    period: '',
    description: '',
    technologies: ''
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience() {
    this.portfolioService.getExperience().subscribe({
      next: (data) => {
        this.experience = data;
      },
      error: (error) => {
        console.error('Error loading experience:', error);
      }
    });
  }

  addExperience() {
    const experience = {
      id: Date.now(),
      title: this.newExperience.title,
      company: this.newExperience.company,
      period: this.newExperience.period,
      description: this.newExperience.description,
      technologies: this.newExperience.technologies.split(',').map(t => t.trim())
    };

    this.experience.push(experience);
    this.resetForm();
  }

  removeExperience(index: number) {
    this.experience.splice(index, 1);
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

  resetForm() {
    this.newExperience = {
      title: '',
      company: '',
      period: '',
      description: '',
      technologies: ''
    };
  }
}
