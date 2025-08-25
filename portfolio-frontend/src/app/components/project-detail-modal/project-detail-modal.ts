import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail-modal.html',
  styleUrl: './project-detail-modal.scss'
})
export class ProjectDetailModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  onImageError(event: any) {
    // Fallback to placeholder image if project image fails to load
    event.target.src = 'assets/images/project-placeholder.jpg';
  }

  hasProjectLinks(): boolean {
    if (!this.project?.links) return false;
    
    return !!(
      this.project.links.github ||
      this.project.links.live ||
      this.project.links.demo ||
      this.project.links.documentation
    );
  }

  openGitHub() {
    if (this.project?.links?.github) {
      window.open(this.project.links.github, '_blank');
    }
  }

  openLiveDemo() {
    if (this.project?.links?.live) {
      window.open(this.project.links.live, '_blank');
    }
  }

  openDemo() {
    if (this.project?.links?.demo) {
      window.open(this.project.links.demo, '_blank');
    }
  }

  openDocumentation() {
    if (this.project?.links?.documentation) {
      window.open(this.project.links.documentation, '_blank');
    }
  }
}
