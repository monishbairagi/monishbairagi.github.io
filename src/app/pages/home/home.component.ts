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

  name = jsonData.about.name.firstName + " " + jsonData.about.name.lastName
  list = jsonData.about['bio-skills'];
  githubLink = jsonData.about.contacts.GitHub;
  emailLink = jsonData.about.contacts.Email;
  linkedInLink = jsonData.about.contacts.LinkedIn;
  constructor() { }

  ngOnInit(): void {
  }

}
