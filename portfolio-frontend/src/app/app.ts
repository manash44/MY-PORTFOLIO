import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { AdminLoginComponent } from './components/admin/admin-login';
import { ChatbotComponent } from './components/chatbot/chatbot';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    AdminLoginComponent,
    ChatbotComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private animationService = inject(AnimationService);
  
  showAdminPanel = false;
  showScrollToTop = false;
  showAdminInfo = false;

  ngOnInit() {
    // Remove any delays and ensure immediate text rendering
    this.initImmediateTextRendering();
    
    // Show admin info on first visit
    this.checkFirstVisit();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Show scroll to top button when scrolled down
    this.showScrollToTop = window.scrollY > 300;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Show admin panel when 'F' key is pressed
    if (event.key.toLowerCase() === 'f') {
      this.showAdminPanel = true;
    }
    
    // Hide admin panel when 'Escape' key is pressed
    if (event.key === 'Escape') {
      this.showAdminPanel = false;
    }
    
    // Show admin info when 'I' key is pressed
    if (event.key.toLowerCase() === 'i') {
      this.showAdminInfo = true;
    }
  }

  onAdminLogout() {
    this.showAdminPanel = false;
  }

  hideAdminInfo() {
    this.showAdminInfo = false;
    localStorage.setItem('adminInfoShown', 'true');
  }

  private checkFirstVisit() {
    const adminInfoShown = localStorage.getItem('adminInfoShown');
    if (!adminInfoShown) {
      // Show admin info after a short delay
      setTimeout(() => {
        this.showAdminInfo = true;
      }, 2000);
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private initImmediateTextRendering() {
    // Ensure all text elements are immediately visible
    const textElements = document.querySelectorAll('.text-reveal, .animate-slide-in-left, .animate-slide-in-right, .animate-slide-in-top, .animate-slide-in-bottom, .animate-fade-in, .animate-zoom-in, .animate-morph-in');
    
    textElements.forEach((element) => {
      // Remove any animation delays and ensure immediate visibility
      element.classList.remove('animate-slide-in-left', 'animate-slide-in-right', 'animate-slide-in-top', 'animate-slide-in-bottom', 'animate-fade-in', 'animate-zoom-in', 'animate-morph-in');
      element.classList.add('text-visible');
      
      // Remove any inline styles that might cause delays
      (element as HTMLElement).style.animationDelay = '0s';
      (element as HTMLElement).style.transitionDelay = '0s';
      (element as HTMLElement).style.opacity = '1';
      (element as HTMLElement).style.transform = 'none';
    });

    // Activate all reveal elements immediately
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-morph');
    revealElements.forEach((element) => {
      element.classList.add('active');
    });
  }

  ngOnDestroy() {
    this.animationService.destroy();
  }
}
