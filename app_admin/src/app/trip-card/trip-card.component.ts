import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'models/trip';
import {TripDataService} from 'services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
  providers: [TripDataService]
})

export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router 
  ) { }

  public editTrip(trip: Trip): void {
    console.log('Inside TripCardComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  ngOnInit(): void {
    this.editTrip(this.trip);
  }
}
