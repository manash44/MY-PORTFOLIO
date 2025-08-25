import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './admin-pages/admin-profile';
import { AdminExperienceComponent } from './admin-pages/admin-experience';
import { AdminProjectsComponent } from './admin-pages/admin-projects';
import { AdminSkillsComponent } from './admin-pages/admin-skills';
import { AdminCertificationsComponent } from './admin-pages/admin-certifications';
import { AdminSocialComponent } from './admin-pages/admin-social';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AdminProfileComponent,
    AdminExperienceComponent,
    AdminProjectsComponent,
    AdminSkillsComponent,
    AdminCertificationsComponent,
    AdminSocialComponent
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboardComponent {
  activePage = 'profile';
  
  adminPages = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'certifications', name: 'Certifications', icon: '🏆' },
    { id: 'social', name: 'Social Media', icon: '📱' }
  ];

  setActivePage(pageId: string) {
    this.activePage = pageId;
  }

  logout() {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  }
}
