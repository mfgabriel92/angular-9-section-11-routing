import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onLoadServersClick(): void {
    this.router.navigate(['/servers']);
  }

  onLoginClick() {
    this.authService.login();
  }

  onLogoutClick() {
    this.authService.logout();
  }
}
