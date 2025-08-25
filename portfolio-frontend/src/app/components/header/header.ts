import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection = 'home';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSection();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Close menu when clicking outside
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Update active section
      this.activeSection = sectionId;
      
      // Update URL hash without page jump
      history.pushState(null, '', `#${sectionId}`);
    }
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  // Handle direct navigation via URL hash
  ngOnInit() {
    // Check for hash in URL on page load
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        this.scrollToSection(sectionId);
      }, 100);
    }
    
    // Update active section on initial load
    this.updateActiveSection();
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (this.isMenuOpen && 
        !navMenu?.contains(target) && 
        !navToggle?.contains(target)) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  // Handle escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
