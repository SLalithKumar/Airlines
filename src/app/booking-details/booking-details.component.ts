import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/Booking';
import { BookingDetailsService } from '../services/bookingdetails.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookings:Booking[] = [];
  constructor(private service:BookingDetailsService) { }

  ngOnInit(): void {
    this.service.getAllBookings().subscribe(data=>
      {
        this.bookings=data;
      })
    }
  
  }