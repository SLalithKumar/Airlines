import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserServiceService } from '../services/userservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:User[]=[];
  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(data=>
    {
      this.users = data;
      console.log(this.users);
    },
    error=>{
      console.log(error);
    })
  }

}
