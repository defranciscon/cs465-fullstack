import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from 'models/trip';
import { Observable, Observer, lastValueFrom } from 'rxjs';
import { response } from 'express';
import { trips } from 'src/app/data/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  trips: Trip[] = [];

  public getTrips(): Observer<Trip[]> {
    console.log('Inside TripDataService#getTrips')
    next: (trips: Trip[]) => this.http.get<Trip[]>(this.tripUrl);
    error: (error: any) => console.error(this.handleError);
    complete: () => console.log();
    return this.getTrips();
  };
    
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return lastValueFrom(this.http
      .post(this.tripUrl, formData))
      .then(response.json)
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return lastValueFrom(this.http
      .get(this.tripUrl + tripCode))
      .then(response.json)
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return lastValueFrom(this.http
      .put(this.tripUrl + formData.code, formData))
      .then(response.json)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}