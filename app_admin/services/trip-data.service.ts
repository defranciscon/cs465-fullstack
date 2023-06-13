import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from 'models/trip';
import { Observable, Observer, lastValueFrom, of } from 'rxjs';

@Injectable({ 
  providedIn: 'root'  
})

export class TripDataService {
  
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Observable<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http.get<Trip[]>(this.tripUrl);
  }
    
  public addTrip(formData: Trip): Observable<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http.post<Trip>(this.tripUrl, formData).pipe(map());
      //catch(this.handleError);
  }

  public getTrip(tripCode: string): Observable<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http.get<Trip>(this.tripUrl + tripCode);
      //catch(this.handleError);
  }

  public updateTrip(formData: Trip): Observable<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http.put<Trip>(this.tripUrl + formData.code, formData);
      //then(response.json)
      //catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    // FIX ME
    return (error.message || error);
  }
}