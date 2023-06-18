import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formError: string = '';
  public registerSuccess: string ='';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public pageContent = {
    header: {
      title: 'Create a new account',
      strapline: ''
    },
    sidebar: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

  public onRegisterSubmit(): void {
    this.formError = '';
    if (
      !this.credentials.name || !this.credentials.email || !this.credentials.password
    ) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doRegister();
      this.registerSuccess = 'Registration successful'
    }
  }

  private doRegister(): void {
    this.authenticationService.register(this.credentials)
    .subscribe(() => this.router.navigateByUrl('#')
    .catch((message) =>
    this.formError = message)
    );
  }
}
