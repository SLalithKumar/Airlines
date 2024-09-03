import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/Payment';
import { PaymentService } from '../services/payment.service';
import{Booking} from '../model/Booking';
import { Flight } from '../model/Flight';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from '../services/bookingdetails.service';
import { ManageFlightService } from '../services/manageflight.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 
  payment = new Payment();
  booking = new Booking();
  flight=new Flight();

  bookingid:any;
  constructor(private service:PaymentService, private service2:ManageFlightService, private route:ActivatedRoute, private service1:BookingDetailsService) { }

  ngOnInit(): void {
    this.bookingid=this.route.snapshot.paramMap.get("id");
  }

  addPayment(){
    this.service.addPayment(this.payment).subscribe(data=>{
      console.log(data);
      
    })
    alert("Payment Successful !!!");
  }
  totalcost(){
    this.service1.getBookingById(this.bookingid).subscribe(data=>{
      this.booking=data;
      this.service2.getFlightById(this.booking.flight_number).subscribe(data=>{
        this.flight=data;
        if(this.booking.class_seats=="Economy"){
          this.payment.total_amount=this.booking.no_of_passengers*this.flight.cost_of_economy_class;
          console.log(this.flight);
        }
        else if(this.booking.class_seats=="Business"){
          this.payment.total_amount=this.booking.no_of_passengers*this.flight.cost_of_business_class;
          console.log(this.flight);
        }
      })
    })

}

}
