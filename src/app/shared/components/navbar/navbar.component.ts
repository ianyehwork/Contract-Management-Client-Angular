import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  setCollapsed(): void {
    if (!this.collapsed) {
      this.collapsed = true;
    }
  }
}
