import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'services/authentication';
import { User } from 'models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  public onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('#');
    return;
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public getUsername(): string {
    const user: User = this.authService.getCurrentUser();
    return user.name;
  }
}
