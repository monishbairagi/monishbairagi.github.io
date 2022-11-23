import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Skills.component.css']
})
export class SkillsComponent implements OnInit {
  cSharp = jsonData.Skills['.Net Full-Stack']['c#'];
  SqlServer = jsonData.Skills['.Net Full-Stack']['SQL Server'];
  WebApi = jsonData.Skills['.Net Full-Stack']['WEB API'];
  MVC = jsonData.Skills['.Net Full-Stack'].MVC;
  dotNet = jsonData.Skills['.Net Full-Stack'];

  DSA = jsonData.Skills.Subjects.DSA;
  OOPs = jsonData.Skills.Subjects.OOPs;
  DBMS = jsonData.Skills.Subjects.DBMS;
  SDLC = jsonData.Skills.Subjects.SDLC;

  CCpp = jsonData.Skills.Others['C/C++'];
  Java = jsonData.Skills.Others.Java;
  Python = jsonData.Skills.Others.Python;
  ReactJS = jsonData.Skills.Others.ReactJS;
  AngularJS = jsonData.Skills.Others.AngularJS;
  MySQL = jsonData.Skills.Others.MySQL;

  constructor() { }

  ngOnInit(): void {
  }

}
