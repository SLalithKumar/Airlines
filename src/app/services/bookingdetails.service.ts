import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { date_of_travel } from '../model/Date';
import { Booking } from '../model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  public getAllBookings():Observable<any>{
    return this.http.get(this.url+'getbookings');
  }

  public getBookingById(booking_id:number):Observable<any>{
    return this.http.get(this.url+'getbooking/'+booking_id);
  } 

  public addBooking(booking:Booking):Observable<any>{
    return this.http.post<Booking>(this.url+'postbooking',booking)
  }

}