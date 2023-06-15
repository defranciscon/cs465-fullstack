import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from 'models/trip';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';

@Injectable()

export class TripDataService {
  
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Observable<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get<Trip[]>(this.tripUrl, {responseType: 'json'})
      .pipe(map(response => { return response as Trip[] }));
  }
    
  public addTrip(formData: Trip): Observable<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post<Trip>(this.tripUrl, formData, {responseType: 'json'})
      .pipe(map(response => {return response as Trip}),
      (catchError(this.handleError)));
  }

  public getTrip(tripCode: string): Observable<Trip[]> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get<Trip[]>(this.tripUrl + tripCode, {responseType: 'json'})
      .pipe(map((response)=> {return response as Trip[]}),
      (catchError(this.handleError)));
  }

  public updateTrip(formData: Trip): Observable<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      .put<Trip>(this.tripUrl + formData.code, formData, {responseType: 'json'})
      .pipe(map(response => {return response as Trip}),
      (catchError(this.handleError)));
  }

  public deleteTrip(tripCode: string): Observable<Trip> {
    console.log('Inside TripDataService#deleteTrip(tripCode)');
    return this.http.delete<Trip>(this.tripUrl + tripCode, {responseType: 'json'})
    .pipe(map(response => {return response as Trip}),
    (catchError(this.handleError)));
  }

  private handleError(error: any): Observable<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return throwError(() => new Error(error.message || error));
  }
}
