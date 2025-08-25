import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio';
import { Skills } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-admin-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-skills.html',
  styleUrl: './admin-skills.scss'
})
export class AdminSkillsComponent implements OnInit {
  skills: Skills | null = null;
  activeCategory = 'programming';
  
  newSkill = {
    name: '',
    level: 50
  };

  skillCategories = [
    { id: 'programming', name: 'Programming Languages', icon: '💻' },
    { id: 'webDevelopment', name: 'Web Development', icon: '🌐' },
    { id: 'database', name: 'Database & Big Data', icon: '🗄️' },
    { id: 'visualization', name: 'Data Visualization', icon: '📊' },
    { id: 'tools', name: 'Tools & Design', icon: '🛠️' },
    { id: 'softSkills', name: 'Soft Skills', icon: '🤝' }
  ];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.portfolioService.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
      }
    });
  }

  addSkill() {
    if (!this.skills) return;

    const skill = {
      name: this.newSkill.name,
      level: this.newSkill.level
    };

    if (this.activeCategory === 'softSkills') {
      this.skills.softSkills.push(this.newSkill.name);
    } else {
      (this.skills as any)[this.activeCategory].push(skill);
    }

    this.resetForm();
  }

  removeSkill(index: number) {
    if (!this.skills) return;

    if (this.activeCategory === 'softSkills') {
      this.skills.softSkills.splice(index, 1);
    } else {
      (this.skills as any)[this.activeCategory].splice(index, 1);
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

  resetForm() {
    this.newSkill = {
      name: '',
      level: 50
    };
  }

  getCurrentSkills() {
    if (!this.skills) return [];
    
    if (this.activeCategory === 'softSkills') {
      return this.skills.softSkills.map((skill, index) => ({ name: skill, level: 100, index }));
    } else {
      return (this.skills as any)[this.activeCategory].map((skill: any, index: number) => ({ ...skill, index }));
    }
  }

  getActiveCategoryName(): string {
    const category = this.skillCategories.find(c => c.id === this.activeCategory);
    return category ? category.name : '';
  }
}
