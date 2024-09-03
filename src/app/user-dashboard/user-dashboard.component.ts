import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private logout: UserLoginService) { }

  ngOnInit(): void {
  }

  userlogout(){
    this.logout.userLoggedout();

  }

}
