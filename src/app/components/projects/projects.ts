import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  imagepath?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Pack&Go',
      description: 'An e-commerce website with Secure authentication for login and sign up, product catalog, shopping cart, and secure checkout functionality.',
      technologies: ['HTML', 'CSS & Bootstrap', 'JavaScript', 'Firebase'],
      githubLink: 'https://github.com/KareemA-Saad/PackAndGo',
      imagepath: 'https://res.cloudinary.com/dzf6sbs86/image/upload/v1748745613/packgo_lattft.png'
    },
    {
      title: 'CityStores',
      description: 'A collaborative e-commerce mobile application that collects all local brands in one place, allowing users to browse and purchase products from local stores.',
      technologies: ['React Native', 'Node.js', 'mySQL', 'Express.js'],
      githubLink: 'https://github.com/KareemA-Saad/CityStores',
      imagepath: 'https://res.cloudinary.com/dzf6sbs86/image/upload/v1748745613/citystores_evpv8j.jpg'
    },
    
  ];
}
