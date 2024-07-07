import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.isSticky = true;
    }
  }

  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  isSticky: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth > 768) {
      this.isSticky = window.scrollY > 50;
    }
  }
}
