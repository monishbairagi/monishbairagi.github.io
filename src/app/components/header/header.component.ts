import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isSticky: boolean = false;
  isMenuOpen = false;
  currentTab = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setCurrentTab(tab: string): void {
    this.currentTab = tab;
    this.isMenuOpen = false; // Close the menu after selecting a tab (optional)
  }
}
