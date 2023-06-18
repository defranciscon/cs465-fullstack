import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'services/authentication';
import { User } from 'models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() { 

  }

  public doLogout(): void {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public getUsername(): string {
    const user: User = this.authService.getCurrentUser();
    return user ? user.name: 'Guest';
  }
}
