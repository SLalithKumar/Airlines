import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/Booking';
import { Flight } from '../model/Flight';
import { User } from '../model/User';
import { BookingDetailsService } from '../services/bookingdetails.service';
import { ManageFlightService } from '../services/manageflight.service';
import { UserServiceService } from '../services/userservice.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  bookings : Booking[]=[];
  flights: Flight[]=[];
  flight1 = new Flight();
  booking = new Booking();
  id:any;
  user1=new User();
  constructor(private service:ManageFlightService,private service1:BookingDetailsService, private service2:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("user");
    
    this.service.getAllFlights().subscribe(data=>
      {
        this.flights=data;
      })
  }
  addBooking(){
    if(this.booking.class_seats=="Economy" && this.flight1.no_of_seats_economy_class>=this.booking.no_of_passengers)
  {
    this.flight1.no_of_seats_economy_class-=this.booking.no_of_passengers;
    this.service1.addBooking(this.booking).subscribe(data=>{
      this.booking=data;
      this.router.navigate(["/payment/"+this.booking.booking_id]);
    },error=>{
      console.log(error);
    })
    this.service.updateFlight(this.flight1).subscribe(data=>{
      alert("booked sucessfully");
      this.flight1=data;
    })
  }
  else if(this.booking.class_seats=="Business" && this.flight1.no_of_seats_business_class>=this.booking.no_of_passengers)
  {
    this.flight1.no_of_seats_business_class-=this.booking.no_of_passengers;
    this.service1.addBooking(this.booking).subscribe(data=>{
      this.booking=data;
      this.router.navigate(["/payment/"+this.booking.booking_id]);
    },error=>{
      console.log(error);
    })
    this.service.updateFlight(this.flight1).subscribe(data=>{
      alert("booked sucessfully");
      this.flight1=data;
    })
  }
  else {
    alert("seats not avaliable");
  }

}

  getFlight(flight_number:number){
    this.service.getFlightById(flight_number).subscribe(data=>{
      this.flight1=data;
      this.booking.flight_number=this.flight1.flight_number;
      this.booking.airlines_name=this.flight1.airlines_name;
      this.booking.source=this.flight1.source;
      this.booking.destination=this.flight1.destination;
      this.booking.date_of_travel=this.flight1.date_of_flight;
      this.booking.departure_time=this.flight1.departure_time;
    })
    this.service2.getUserById(this.id).subscribe(data=>{
      this.user1=data;
      this.booking.user_id=this.user1.user_id;
      this.booking.user_name=this.user1.user_name;
      
    })
  }


}
