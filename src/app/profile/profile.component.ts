import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserServiceService } from '../services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user=new User();
  id:any;
  user1=new User();
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("user");
    this.service.getUserById(this.id).subscribe(data=>{
      this.user=data;
    })
  
}
}