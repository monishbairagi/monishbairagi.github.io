import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.css']
})
export class EducationComponent implements OnInit {

  ugUniversity = jsonData.Education.Graduation.University;
  ugInstitute = jsonData.Education.Graduation.Institute;
  ugDegree = jsonData.Education.Graduation.Degree;
  ugDepartment = jsonData.Education.Graduation.Department;
  ugYear = jsonData.Education.Graduation.Year;
  ugCGPA = jsonData.Education.Graduation.CGPA;

  hsBoard = jsonData.Education['Higher Secondry'].Board;
  hsInstitute = jsonData.Education['Higher Secondry'].Institute;
  hsStream = jsonData.Education['Higher Secondry'].Stream;
  hsYear = jsonData.Education['Higher Secondry'].Year;
  hsPercentage = jsonData.Education['Higher Secondry'].Percentage;

  sBoard = jsonData.Education.Secondry.Board;
  sInstitute = jsonData.Education.Secondry.Institute;
  sYear = jsonData.Education.Secondry.Year;
  sPercentage = jsonData.Education.Secondry.Percentage;

  constructor() { }

  ngOnInit(): void {
  }

}
