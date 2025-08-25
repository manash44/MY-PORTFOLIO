import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio';
import { Profile } from '../../../interfaces/portfolio.interface';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.scss'
})
export class AdminProfileComponent implements OnInit {
  profile: Profile | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.portfolioService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      }
    });
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
}
