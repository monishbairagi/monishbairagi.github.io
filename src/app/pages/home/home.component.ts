import { Component, OnInit } from '@angular/core';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { default as jsonData } from '../../../data/information.json';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    AngularTypewriterEffectModule //<- my import
  ],
})
export class HomeComponent implements OnInit {

  name = jsonData.About.Name['First Name'] + " " + jsonData.About.Name['Last Name']
  list = jsonData.About['Bio Skills'];
  githubLink = jsonData.About.Contacts.GitHub;
  emailLink = jsonData.About.Contacts.Email;
  linkedInLink = jsonData.About.Contacts.LinkedIn;
  constructor() { }

  ngOnInit(): void {
  }

}
