import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessages') private chatMessages!: ElementRef;
  
  isOpen = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  isLoading = false;
  shouldScrollToBottom = false;
  
  // Note: In production, this should be stored securely on the backend
  // For demo purposes, we'll use a mock response system
  private readonly USE_MOCK_RESPONSES = true;
  private readonly GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Add welcome message
    this.messages.push({
      type: 'bot',
      content: 'Hello! I\'m Manash\'s AI assistant. How can I help you today? You can ask me about his skills, projects, experience, or any other portfolio-related questions.',
      timestamp: new Date()
    });
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // Focus on input when chat opens
      setTimeout(() => {
        const input = document.querySelector('.message-input') as HTMLTextAreaElement;
        if (input) {
          input.focus();
        }
      }, 300);
    }
  }

  async sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading) return;

    const userMessage = this.currentMessage.trim();
    this.messages.push({
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    });

    this.isLoading = true;
    this.shouldScrollToBottom = true;
    const messageToSend = this.currentMessage;
    this.currentMessage = '';

    try {
      let response: string;
      
      if (this.USE_MOCK_RESPONSES) {
        response = await this.getMockResponse(messageToSend);
      } else {
        response = await this.callGeminiAPI(messageToSend);
      }
      
      this.messages.push({
        type: 'bot',
        content: response,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error getting response:', error);
      this.messages.push({
        type: 'bot',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again later or check your internet connection.',
        timestamp: new Date()
      });
    } finally {
      this.isLoading = false;
      this.shouldScrollToBottom = true;
    }
  }

  private async getMockResponse(message: string): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    const lowerMessage = message.toLowerCase();
    
    // Mock responses based on keywords
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
      return 'Manash has expertise in multiple technologies including Python, Java, C++, React.js, Node.js, MySQL, MongoDB, and AI/ML. He\'s particularly strong in full-stack development and has experience with both frontend and backend technologies.';
    }
    
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return 'Manash has worked on several impressive projects including VisionAid App (healthcare accessibility), CyberWatch (cybersecurity), Telemedicine Platform, and Healthcare Analytics. These projects showcase his skills in healthcare technology and full-stack development.';
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('job') || lowerMessage.includes('work')) {
      return 'Manash has professional experience at Healthcare Tech Solutions and Digital Solutions Inc. He\'s worked on healthcare technology solutions and has a strong background in developing innovative digital solutions.';
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
      return 'Manash completed his education in Computer Science and Engineering, focusing on software development and technology solutions. He\'s based in Guwahati, Assam, India.';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return 'You can reach out to Manash through the contact form on this portfolio website. He\'s always interested in new opportunities and collaborations in the tech industry.';
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! I\'m here to help you learn more about Manash\'s portfolio. Feel free to ask me about his skills, projects, experience, or any other questions you might have!';
    }
    
    // Default response
    return 'That\'s an interesting question! Manash is an innovative IT professional with expertise in healthcare technology, full-stack development, and AI/ML. You can ask me about his specific skills, projects, experience, or education background.';
  }

  private async callGeminiAPI(message: string): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      contents: [{
        parts: [{
          text: `You are Manash Protim Deori's AI assistant. You help answer questions about Manash's portfolio, skills, projects, and experience. 
          
          Context about Manash:
          - Name: Manash Protim Deori
          - Title: Innovative IT Professional
          - Skills: Python, Java, C++, React.js, Node.js, MySQL, MongoDB, AI/ML
          - Projects: VisionAid App, CyberWatch, Telemedicine Platform, Healthcare Analytics
          - Experience: Healthcare Tech Solutions, Digital Solutions Inc.
          - Location: Guwahati, Assam, India
          
          Please provide helpful, professional responses about Manash's background and expertise. Keep responses concise and friendly.
          
          User question: ${message}`
        }]
      }]
    };

    try {
      const response: any = await this.http.post(this.GEMINI_API_URL, body, { headers }).toPromise();
      
      if (response && response.candidates && response.candidates[0] && response.candidates[0].content) {
        return response.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response structure from API');
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 403) {
          throw new Error('API access denied. Please check your API key.');
        } else if (error.status === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        } else {
          throw new Error(`API error: ${error.status} - ${error.statusText}`);
        }
      }
      throw error;
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      const element = this.chatMessages.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (error) {
      console.error('Error scrolling to bottom:', error);
    }
  }

  // Auto-resize textarea
  onInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  }

  // Track by function for better performance
  trackByMessage(index: number, message: ChatMessage): number {
    return index;
  }
}
