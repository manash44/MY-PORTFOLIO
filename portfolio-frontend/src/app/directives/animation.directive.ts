import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Directive({
  selector: '[appAnimation]',
  standalone: true
})
export class AnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-zoom' | 'reveal-morph' = 'reveal';
  @Input() animationDelay = 0;

  constructor(
    private elementRef: ElementRef,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    
    // Add the appropriate animation class
    element.classList.add(this.animationType);
    
    // Add delay if specified
    if (this.animationDelay > 0) {
      element.style.animationDelay = `${this.animationDelay}s`;
    }
    
    // Observe the element for intersection
    this.animationService.observeElement(element);
  }

  ngOnDestroy() {
    const element = this.elementRef.nativeElement;
    this.animationService.unobserveElement(element);
  }
}
