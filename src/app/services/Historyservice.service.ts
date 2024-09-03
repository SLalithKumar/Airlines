import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/Booking';

@Injectable({
  providedIn: 'root'
})
export class HistoryserviceService {
  private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  public getBookings():Observable<any>{
    return this.http.get(this.url+'getbookings');
  }

  public getBookingById(booking_id:number):Observable<any>{
    return this.http.get(this.url+'getbooking/'+booking_id);
  }

}