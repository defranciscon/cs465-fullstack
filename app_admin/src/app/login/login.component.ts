import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication';

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent implements OnInit {

  public formError: string = '';

  public credentials = { 
    name: '', 
    email: '', 
    password: ''
  };

  constructor( 
    private router: Router, 
    private authService: AuthenticationService
  ) { }
  
  ngOnInit() {} 
    
  public onLoginSubmit(): void { 
    this.formError = ''; 
    if (!this.credentials.email || !this.credentials.password) { 
      this.formError = 'All fields are required, please try again'; 
    } else { 
      this.doLogin();
    } 
  }
    
  private doLogin(): void { 
    this.authService.login(this.credentials)
    .subscribe(() => this.router.navigateByUrl('#')
    .catch((message) => this.formError = message)
    );
  }
  
}