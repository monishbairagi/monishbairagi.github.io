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
  firstNameFirstChar = jsonData.About.Name['First Name'].charAt(0);
  lastNameFirstChar = jsonData.About.Name['Last Name'].charAt(0);
  githubLink = jsonData.About.Contacts.GitHub;
  emailLink = jsonData.About.Contacts.Email;
  linkedInLink = jsonData.About.Contacts.LinkedIn;

  title = this.getPageTitle();
  changePageTitle(t: any) {
    this.title = t;
    this.titleService.setTitle("Monish's - " + this.capitalizeTitle(t));
  }

  constructor(private titleService: Title) {
    titleService.setTitle("Monish's - " + this.capitalizeTitle(this.getPageTitle()));
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

  capitalizeTitle(t: string): string {
    const capitalizedTitle = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
    return capitalizedTitle;
  }
}
