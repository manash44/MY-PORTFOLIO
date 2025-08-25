import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio';
import { Certification } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-admin-certifications',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-certifications.html',
  styleUrl: './admin-certifications.scss'
})
export class AdminCertificationsComponent implements OnInit {
  certifications: Certification[] = [];
  
  newCertification = {
    name: '',
    issuer: '',
    year: '',
    image: ''
  };

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

  addCertification() {
    const certification = {
      id: Date.now(),
      name: this.newCertification.name,
      issuer: this.newCertification.issuer,
      year: this.newCertification.year,
      image: this.newCertification.image || '/assets/images/cert-placeholder.jpg'
    };

    this.certifications.push(certification);
    this.resetForm();
  }

  removeCertification(index: number) {
    this.certifications.splice(index, 1);
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

  resetForm() {
    this.newCertification = {
      name: '',
      issuer: '',
      year: '',
      image: ''
    };
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newCertification.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
