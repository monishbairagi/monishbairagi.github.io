import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profilePic = "../../../../assets/my-pic.jpg";
  firstNameFirstChar = jsonData.about.name.firstName.charAt(0);
  lastNameFirstChar = jsonData.about.name.lastName.charAt(0);
  designation = jsonData.about.designation;
  company = jsonData.about.company;
  githubLink = jsonData.about.contacts.GitHub;
  emailLink = jsonData.about.contacts.Email;
  linkedInLink = jsonData.about.contacts.LinkedIn;

  constructor() {
  }

  ngOnInit(): void {
  }

}
