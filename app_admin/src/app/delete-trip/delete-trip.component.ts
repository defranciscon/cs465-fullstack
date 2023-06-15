import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'models/trip';
import { TripDataService } from 'services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})

export class DeleteTripComponent implements OnInit {

  trip: Trip | any;
  submitted = false;

  constructor(
    private tripService: TripDataService,
    private router: Router
  ) {}

  ngOnInit() {

    let tripCode = localStorage.getItem("tripCode");
    if(!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);

    console.log('DeleteTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')');

    this.tripService.getTrip(tripCode).subscribe((response) => {
      console.log(response);
    });

    tripCode = this.trip.code;
  }

  onSubmit() {
    this.submitted = true;
    this.tripService.deleteTrip(this.trip.code).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
