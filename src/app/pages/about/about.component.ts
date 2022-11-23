import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  bio = jsonData.About.Bio;
  achievement1 = jsonData.About.Achievements[1];
  achievement2 = jsonData.About.Achievements[2];
  achievement3 = jsonData.About.Achievements[3];
  hobbie1 = jsonData.About.Hobbies[1];
  hobbie2 = jsonData.About.Hobbies[2];
  hobbie3 = jsonData.About.Hobbies[3];
  language1 = jsonData.About.Languages[1];
  language2 = jsonData.About.Languages[2];
  language3 = jsonData.About.Languages[3];
  codeChefLink = jsonData.About.Contacts.CodeChef;
  bloggerLink = jsonData.About.Contacts.Blogger;

  e1Designation = jsonData.About.Experience[1].Designation;
  e1Company = jsonData.About.Experience[1].Company;
  e1JobType = jsonData.About.Experience[1]['Job Type'];
  e1TimeFrame = jsonData.About.Experience[1]['Time Frame'];
  e1CompanyLogo = jsonData.About.Experience[1]['Company Logo'];

  e2Designation = jsonData.About.Experience[2].Designation;
  e2Company = jsonData.About.Experience[2].Company;
  e2JobType = jsonData.About.Experience[2]['Job Type'];
  e2TimeFrame = jsonData.About.Experience[2]['Time Frame'];
  e2CompanyLogo = jsonData.About.Experience[2]['Company Logo'];

  constructor() { }

  ngOnInit(): void {
  }

}
