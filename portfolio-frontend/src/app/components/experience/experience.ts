import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Experience } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

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
}
