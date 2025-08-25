import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, Experience, Projects, Skills, Certification, ContactForm } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/api';

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experience`);
  }

  getProjects(): Observable<Projects> {
    return this.http.get<Projects>(`${this.apiUrl}/projects`);
  }

  getSkills(): Observable<Skills> {
    return this.http.get<Skills>(`${this.apiUrl}/skills`);
  }

  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.apiUrl}/certifications`);
  }

  sendContactForm(formData: ContactForm): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/contact`, formData);
  }

  // Admin update methods
  updateProfile(profile: Profile): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/admin/profile`, profile);
  }

  updateExperience(experience: Experience[]): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/admin/experience`, experience);
  }

  updateProjects(projects: Projects): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/admin/projects`, projects);
  }

  updateSkills(skills: Skills): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/admin/skills`, skills);
  }

  updateCertifications(certifications: Certification[]): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/admin/certifications`, certifications);
  }
}
