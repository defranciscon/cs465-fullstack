import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from 'services/trip-data.service';
import { Trip } from 'models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  
  trips: Trip[] = [];
  
  message: string | any;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
    ) { }

  public addTrip(): void {
    console.log('Inside TriplistingComponent#addTrip');
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService.getTrips().subscribe((trips) => 
      this.trips = trips);
      (foundTrips: Trip[]) => {
        this.message = foundTrips.length > 0 ? ' ' : 'No trips found';
        this.trips = foundTrips;
      };
    };

  ngOnInit(): void {
    this.getTrips();
  }
}