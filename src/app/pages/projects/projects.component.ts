import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projFunction1 = jsonData.Projects['Shipment Tracking (Client Project)'].Description;
  projTechnologiesUsed1 = jsonData.Projects['Shipment Tracking (Client Project)']['Tech. Used'];

  projFunction2 = jsonData.Projects['Secure Chat Web App (College Project)'].Description;
  projTechnologiesUsed2 = jsonData.Projects['Secure Chat Web App (College Project)']['Tech. Used'];
  projGitHubLink2 = jsonData.Projects['Secure Chat Web App (College Project)'].Link;

  projFunction3 = jsonData.Projects['Attendance Android App (College Project)'].Description;
  projTechnologiesUsed3 = jsonData.Projects['Attendance Android App (College Project)']['Tech. Used'];
  projGitHubLink3 = jsonData.Projects['Attendance Android App (College Project)'].Link;
  constructor() {
  }
}
