import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/Flight';

import { ManageFlightService } from '../services/manageflight.service';


@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {

  schedules:Flight[] = [];
  schedule1=new Flight();
  schedule2=new Flight();
  flight_number:any;
  constructor(private service:ManageFlightService) { }

  ngOnInit(): void {
    this.service.getAllFlights().subscribe(data=>
    {
      this.schedules=data;
    })
  }
  addSchedule(){
    this.service.addFlight(this.schedule1).subscribe(data=>{
      console.log(data);
      this.service.getAllFlights().subscribe(data=>
        {
          this.schedules=data;
        })
    })
  }

  getSchedule(flight_number:number){
    this.service.getFlightById(flight_number).subscribe(data=>{
      this.schedule2=data;
    })
  }

  updateSchedule(){
    this.service.updateFlight(this.schedule2).subscribe(data=>{
      console.log(data);
      this.service.getAllFlights().subscribe(data=>
        {
          this.schedules=data;
        })
    })
  }

}
