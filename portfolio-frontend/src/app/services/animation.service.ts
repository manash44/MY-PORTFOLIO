import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;
  private animationState = new BehaviorSubject<boolean>(false);

  constructor(private ngZone: NgZone) {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => {
              entry.target.classList.add('active');
              this.animationState.next(true);
            });
          } else {
            // Optional: Remove active class when element is out of view
            // this.ngZone.run(() => {
            //   entry.target.classList.remove('active');
            // });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observeElement(element: HTMLElement) {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  unobserveElement(element: HTMLElement) {
    if (this.observer) {
      this.observer.unobserve(element);
    }
  }

  // Trigger entrance animations
  triggerEntranceAnimation(element: HTMLElement, animationType = 'fade-in') {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.8s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  }

  // Trigger morph animation
  triggerMorphAnimation(element: HTMLElement) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8) rotate(-5deg)';
    element.style.filter = 'blur(5px)';
    
    setTimeout(() => {
      element.style.transition = 'all 1s ease';
      element.style.opacity = '1';
      element.style.transform = 'scale(1) rotate(0deg)';
      element.style.filter = 'blur(0px)';
    }, 100);
  }

  // Trigger slide animation
  triggerSlideAnimation(element: HTMLElement, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') {
    const transforms = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)'
    };

    element.style.opacity = '0';
    element.style.transform = transforms[direction];
    
    setTimeout(() => {
      element.style.transition = 'all 0.8s ease';
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0)';
    }, 100);
  }

  // Trigger zoom animation
  triggerZoomAnimation(element: HTMLElement) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.3)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.6s ease';
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    }, 100);
  }

  // Trigger exit animation
  triggerExitAnimation(element: HTMLElement, animationType = 'fade-out') {
    element.style.transition = 'all 0.6s ease';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-30px)';
  }

  // Stagger animation for multiple elements
  staggerAnimation(elements: HTMLElement[], animationType = 'fade-in', delay = 0.1) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        switch (animationType) {
          case 'morph':
            this.triggerMorphAnimation(element);
            break;
          case 'slide-left':
            this.triggerSlideAnimation(element, 'left');
            break;
          case 'slide-right':
            this.triggerSlideAnimation(element, 'right');
            break;
          case 'slide-top':
            this.triggerSlideAnimation(element, 'top');
            break;
          case 'slide-bottom':
            this.triggerSlideAnimation(element, 'bottom');
            break;
          case 'zoom':
            this.triggerZoomAnimation(element);
            break;
          default:
            this.triggerEntranceAnimation(element);
        }
      }, index * delay * 1000);
    });
  }

  // Text reveal animation
  animateTextReveal(element: HTMLElement) {
    const text = element.textContent || '';
    element.innerHTML = '';
    element.style.overflow = 'hidden';
    
    const words = text.split(' ');
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(100%)';
      span.style.transition = 'all 0.6s ease';
      element.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, index * 0.1 * 1000);
    });
  }

  // Card grid animation
  animateCardGrid(cards: HTMLElement[]) {
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 0.15 * 1000);
    });
  }

  // Cleanup
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
