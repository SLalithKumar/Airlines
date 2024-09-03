import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/Booking';
import { User } from '../model/User';
import { HistoryserviceService } from '../services/Historyservice.service';

@Component({
  selector: 'app-booking-histroy',
  templateUrl: './booking-histroy.component.html',
  styleUrls: ['./booking-histroy.component.css']
})
export class BookingHistroyComponent implements OnInit {

  user=new User();
  history1:Booking[]=[];
  id:any;
  history2:Booking[]=[];
 
  constructor(private service:HistoryserviceService) { 
   
  }

  ngOnInit(): void {
    
   this.id=sessionStorage.getItem("user");
    this.history2=[];
      this.service.getBookings().subscribe(data=>{
        this.history1=data;
        this.history1.forEach(res=>{
          if(res.user_id==this.id){
            this.history2.push(res);
          }
        })
      })
    } 
  }
  
