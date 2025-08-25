import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Certification } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadCertifications();
  }

  loadCertifications() {
    this.portfolioService.getCertifications().subscribe({
      next: (data) => {
        this.certifications = data;
      },
      error: (error) => {
        console.error('Error loading certifications:', error);
      }
    });
  }
}
