import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  cSharp = jsonData.skills['.Net Full-Stack']['c#'];
  SqlServer = jsonData.skills['.Net Full-Stack']['SQL Server'];
  WebApi = jsonData.skills['.Net Full-Stack']['WEB API'];
  MVC = jsonData.skills['.Net Full-Stack'].MVC;
  dotNet = jsonData.skills['.Net Full-Stack'];

  DSA = jsonData.skills.Subjects.DSA;
  OOPs = jsonData.skills.Subjects.OOPs;
  DBMS = jsonData.skills.Subjects.DBMS;
  SDLC = jsonData.skills.Subjects.SDLC;

  CCpp = jsonData.skills.Others['C/C++'];
  Java = jsonData.skills.Others.Java;
  Python = jsonData.skills.Others.Python;
  ReactJS = jsonData.skills.Others.ReactJS;
  AngularJS = jsonData.skills.Others.AngularJS;
  MySQL = jsonData.skills.Others.MySQL;

  constructor() { }

  ngOnInit(): void {
  }

}
