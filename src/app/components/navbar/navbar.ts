import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'hero';
  sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  
  ngOnInit(): void {
    this.checkScrollPosition();
    this.detectActiveSection();
  }
  
  @HostListener('window:scroll', [])
  checkScrollPosition(): void {
    this.isScrolled = window.scrollY > 50;
    this.detectActiveSection();
  }
  
  toggleMenu(forceClose = false): void {
    if (forceClose) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }
  
  detectActiveSection(): void {
    const scrollPosition = window.scrollY + 100;
    
    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
