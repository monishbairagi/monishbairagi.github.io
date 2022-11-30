import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projFunction1 = jsonData.Projects['Attendance App (Android)'].Function;
  projTechnologiesUsed1 = jsonData.Projects['Attendance App (Android)']['Tech. Used'];
  projGitHubLink1 = jsonData.Projects['Attendance App (Android)'].Link;

  constructor() {
  }
}
