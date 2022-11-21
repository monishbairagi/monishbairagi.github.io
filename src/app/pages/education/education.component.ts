import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ugUniversity = jsonData.education.Graduation.University;
  ugInstitute = jsonData.education.Graduation.Institute;
  ugDegree = jsonData.education.Graduation.Degree;
  ugDepartment = jsonData.education.Graduation.Department;
  ugYear = jsonData.education.Graduation.Year;
  ugCGPA = jsonData.education.Graduation.CGPA;

  hsBoard = jsonData.education['Higher Secondry'].Board;
  hsInstitute = jsonData.education['Higher Secondry'].Institute;
  hsStream = jsonData.education['Higher Secondry'].Stream;
  hsYear = jsonData.education['Higher Secondry'].Year;
  hsPercentage = jsonData.education['Higher Secondry'].Percentage;

  sBoard = jsonData.education.Secondry.Board;
  sInstitute = jsonData.education.Secondry.Institute;
  sYear = jsonData.education.Secondry.Year;
  sPercentage = jsonData.education.Secondry.Percentage;

  constructor() { }

  ngOnInit(): void {
  }

}
