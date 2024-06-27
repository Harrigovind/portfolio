import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  
  projects = [
    {
      title: 'MusiCo music player',
      period: 'May 2024',
      description: 'MusiCo is a website to play music with the help of Spotify API.',
      techstack: ['React','Node.js','Axios'],
      link: 'https://harrigovind.github.io/musico',
      imageUrl: 'assets/images/MusiCo.png'
    },
    {
      title: 'Rainfall data management website',
      period: 'December 2023',
      description: 'Prototype of a rainfall data management website for the Parambikulam - Aliyar Project',
      techstack: ['Angular','Django','MySQL','TypeScript'],
      link: 'https://github.com/Harrigovind/rainfall-data-entry-website',
      imageUrl: 'assets/images/PAPWISDOM.png'
    },
    {
      title: 'Persona - Extension',
      period: 'October 2023',
      description: 'An extension for customizing the backgrounds of web pages.',
      techstack: ['HTML','CSS','JavaScript', 'REST API'],
      link: '',
      imageUrl: 'assets/images/Persona.png'
    },
    {
      title: 'Virtual Assistant using Python',
      period: 'December 2022',
      description: 'Prototype of a personal virtual assistant using Python libraries.',
      techstack: ['Python'],
      link: '',
      imageUrl: ''
    }
  ];
  

}
