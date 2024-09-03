import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../model/Flight';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFlightService {

  private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  public getAllFlights():Observable<any>{
    return this.http.get(this.url+'getflights');
  } 

  public getFlightsById(flight_number:number):Observable<any>{
    return this.http.get(this.url+'getflight/'+flight_number);
  }

  public updateFlight(flight:Flight):Observable<any>{
    return this.http.put<Flight>(this.url+'updateFlight/',flight);
  }

}