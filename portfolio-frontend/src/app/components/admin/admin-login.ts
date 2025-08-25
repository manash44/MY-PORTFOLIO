import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.scss'
})
export class AdminLoginComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();
  
  credentials = {
    email: '',
    password: ''
  };
  
  isLoggedIn = false;
  errorMessage = '';

  ngOnInit() {
    // Check if already logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      this.isLoggedIn = true;
    }
  }

  login() {
    if (this.credentials.email === 'manashchariyadeori@gmail.com' && 
        this.credentials.password === 'manash123@') {
      this.isLoggedIn = true;
      this.errorMessage = '';
      localStorage.setItem('adminLoggedIn', 'true');
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    this.credentials = { email: '', password: '' };
    localStorage.removeItem('adminLoggedIn');
    this.logout.emit();
  }
}
