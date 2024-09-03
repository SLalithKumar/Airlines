import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/Flight';
import { ManageFlightService } from '../services/manageflight.service';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.css']
})
export class ManageFlightComponent implements OnInit {

  flights:Flight[] = [];
  flight_number:any;
  flight1=new Flight();
  flight2=new Flight();
  constructor(private service:ManageFlightService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllFlights().subscribe(data=>
      {
        this.flights=data;
      })
    }
  
  addFlight(){
    this.service.addFlight(this.flight1).subscribe(data=>{
      console.log(data);
      this.service.getAllFlights().subscribe(data=>
        {
          this.flights=data;
        })
    })
  }
  getFlight(flight_number:number){
    this.service.getFlightById(flight_number).subscribe(data=>{
      this.flight2=data;
    })
  }

  updateFlight(){
    this.service.updateFlight(this.flight2).subscribe(data=>{
      console.log(data);
      this.service.getAllFlights().subscribe(data=>
        {
          this.flights=data;
        })
    })
  }
}



