import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  private fullName = 'Kareem Saad';
  private typingSpeed = 150; // milliseconds per character
  private typingDelay = 1000; // delay before typing starts

  ngOnInit(): void {
    setTimeout(() => {
      this.typeWriter();
    }, this.typingDelay);
  }

  private typeWriter(): void {
    const typingElement = document.querySelector('.typing-text') as HTMLElement;
    if (!typingElement) return;

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < this.fullName.length) {
        typingElement.textContent += this.fullName.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
