import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bio = jsonData.about.bio;
  achievement1 = jsonData.about.Achievements[1];
  achievement2 = jsonData.about.Achievements[2];
  achievement3 = jsonData.about.Achievements[3];
  hobbie1 = jsonData.about.Hobbies[1];
  hobbie2 = jsonData.about.Hobbies[2];
  hobbie3 = jsonData.about.Hobbies[3];
  language1 = jsonData.about.Languages[1];
  language2 = jsonData.about.Languages[2];
  language3 = jsonData.about.Languages[3];
  codeChefLink = jsonData.about.contacts.CodeChef;
  bloggerLink = jsonData.about.contacts.Blogger;

  constructor() { }

  ngOnInit(): void {
  }

}
