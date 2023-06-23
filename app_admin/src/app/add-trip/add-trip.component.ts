import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from 'services/trip-data.service';
import { AuthenticationService } from 'services/authentication';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  addForm: FormGroup | any;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  // get the form short name to access the form field
  
  onSubmit() {
    this.submitted = true;
    if(this.addForm.valid) {
      this.tripService.addTrip(this.addForm.value)
      .subscribe((data) => {
          console.log(data)
          this.router.navigate([''])
      }); 
    }
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get f() { return this.addForm.controls; } 
}
