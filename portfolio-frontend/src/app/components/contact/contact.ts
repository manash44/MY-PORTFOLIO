import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { ContactForm } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    this.portfolioService.sendContactForm(this.formData).subscribe({
      next: () => {
        alert('Message sent successfully!');
        this.resetForm();
      },
      error: (error) => {
        alert('Failed to send message. Please try again.');
        console.error('Contact form error:', error);
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
