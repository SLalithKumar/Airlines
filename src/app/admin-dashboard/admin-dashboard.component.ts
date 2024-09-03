import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private logout:AdminLoginService) { }

  ngOnInit(): void {
  }

  adminloggedout(){
    this.logout.adminLoggedout();
  }

}
