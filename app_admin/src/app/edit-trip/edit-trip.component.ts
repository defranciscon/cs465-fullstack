import { Component, OnInit, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from 'services/trip-data.service';
import { AuthenticationService } from 'services/authentication';
import { map } from 'rxjs';
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Trip } from 'models/trip';
import { User } from 'models/user';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css'],
  
})

export class EditTripComponent implements OnInit {

  editForm: FormGroup | any;
  submitted = false;
  message: string;
  tripCode: string;
  trip: Trip;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService,
    private authService: AuthenticationService
  ) { }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public getCurrentUser(): User | any {
    return this.authService.getCurrentUser();
  }

  ngOnInit() {

    this.tripCode = localStorage.getItem("tripCode");
    if(!this.tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripsComponent#onInit found tripCode ' + this.tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [this.tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    console.log('EditTripsComponent#onInit calling TripDataService#getTrip(\'' + this.tripCode + '\')');

    this.tripService.getTrip(this.tripCode)
      .subscribe((data) => {
        console.log(data);
        this.editForm.patchValue(data[0]);
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
      .subscribe(value => { 
          this.editForm.value = value;
          console.log(value);
        });
    this.router.navigate([''])
    }
  }
  get f() { return this.editForm.controls; }

}

