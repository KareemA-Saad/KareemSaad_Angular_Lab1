import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Java', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Angular', percentage: 75 },
    { name: 'Linux Administration', percentage: 70 },
    { name: 'Database Admin', percentage: 65 },
    { name: 'HTML & CSS', percentage: 90 }
  ];

  ngOnInit(): void {
    // Animation delay for progressive loading of skill bars
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar, index) => {
        const htmlBar = bar as HTMLElement;
        htmlBar.style.animation = `progressAnimation 1s ease-out forwards`;
        htmlBar.style.animationDelay = `${index * 0.2}s`;
      });
    }, 500);
  }
}
