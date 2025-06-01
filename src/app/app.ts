import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero id="hero"></app-hero>
    <app-about id="about"></app-about>
    <app-skills id="skills"></app-skills>
    <app-projects id="projects"></app-projects>
    <app-footer id="contact"></app-footer>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Kareem Saad - Portfolio';
}
