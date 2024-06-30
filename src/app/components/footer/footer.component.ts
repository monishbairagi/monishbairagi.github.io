import { Component, OnInit } from '@angular/core';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  linkedInLink = jsonData.About.Contacts.LinkedIn;

  constructor() { }

  ngOnInit(): void {
  }

}
