import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { default as jsonData } from '../../../data/information.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profilePic = "../../../../assets/my-pic.jpg";
  firstNameFirstChar = jsonData.about.name.firstName.charAt(0);
  lastNameFirstChar = jsonData.about.name.lastName.charAt(0);
  designation = jsonData.about.designation;
  company = jsonData.about.company;
  githubLink = jsonData.about.contacts.GitHub;
  emailLink = jsonData.about.contacts.Email;
  linkedInLink = jsonData.about.contacts.LinkedIn;

  title = this.getPageTitle();
  changePageTitle(t: any) {
    this.title = t;
    this.titleService.setTitle("Monish's - " + t);
  }

  constructor(private titleService: Title) {
    titleService.setTitle("Monish's - " + this.getPageTitle());
  }

  ngOnInit(): void {
  }

  getPageTitle(): string {
    const { pathname } = window.location;
    let trimmedPathname = pathname;
    if (pathname.endsWith("/")) {
      trimmedPathname = pathname.slice(0, pathname.length - 1);
    }
    let title = trimmedPathname.slice(trimmedPathname.lastIndexOf("/") + 1).toUpperCase();
    return (title.length == 0) ? "HOME" : title;
  }
}
