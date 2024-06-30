import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Skills.component.css']
})
export class SkillsComponent implements OnInit {
  cSharp = jsonData.Skills['.Net Full-Stack']['c#'];
  SqlServer = jsonData.Skills['.Net Full-Stack']['SQL Server'];
  WebApi = jsonData.Skills['.Net Full-Stack']['WEB API'];
  MVC = jsonData.Skills['.Net Full-Stack'].MVC;
  dotNet = jsonData.Skills['.Net Full-Stack'];

  DSA = jsonData.Skills.Concepts.DSA;
  OOPs = jsonData.Skills.Concepts.OOPs;
  DBMS = jsonData.Skills.Concepts.DBMS;
  SDLC = jsonData.Skills.Concepts.SDLC;

  CCpp = jsonData.Skills.Languages['C/C++'];
  Java = jsonData.Skills.Languages.Java;
  Python = jsonData.Skills.Languages.Python;

  ReactJS = jsonData.Skills.OtherSkils.ReactJS;
  AngularJS = jsonData.Skills.OtherSkils.AngularJS;
  MSSQL = jsonData.Skills.OtherSkils.MSSQL;

  constructor() { }

  ngOnInit(): void {
  }

}
