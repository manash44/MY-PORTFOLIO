import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../services/portfolio';

@Component({
  selector: 'app-admin-social',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-social.html',
  styleUrl: './admin-social.scss'
})
export class AdminSocialComponent implements OnInit {
  socialLinks = {
    linkedin: '',
    github: '',
    twitter: '',
    instagram: '',
    facebook: '',
    youtube: '',
    portfolio: '',
    email: ''
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.loadSocialLinks();
  }

  loadSocialLinks() {
    // Load from localStorage or API
    const saved = localStorage.getItem('socialLinks');
    if (saved) {
      this.socialLinks = JSON.parse(saved);
    }
  }

  saveSocialLinks() {
    localStorage.setItem('socialLinks', JSON.stringify(this.socialLinks));
    alert('Social media links updated successfully!');
  }

  resetForm() {
    this.socialLinks = {
      linkedin: '',
      github: '',
      twitter: '',
      instagram: '',
      facebook: '',
      youtube: '',
      portfolio: '',
      email: ''
    };
  }

  getSocialLinks() {
    return [
      { name: 'LinkedIn', icon: '💼', url: this.socialLinks.linkedin },
      { name: 'GitHub', icon: '🐙', url: this.socialLinks.github },
      { name: 'Twitter/X', icon: '🐦', url: this.socialLinks.twitter },
      { name: 'Instagram', icon: '📷', url: this.socialLinks.instagram },
      { name: 'Facebook', icon: '📘', url: this.socialLinks.facebook },
      { name: 'YouTube', icon: '📺', url: this.socialLinks.youtube },
      { name: 'Portfolio', icon: '🌐', url: this.socialLinks.portfolio },
      { name: 'Email', icon: '📧', url: this.socialLinks.email }
    ];
  }
}
