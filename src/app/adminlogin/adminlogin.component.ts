import { Admin } from './../model/Admin';
import { Router } from '@angular/router';
import { AdminLoginService } from './../services/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin = new Admin();

  b: any;

  constructor(private service: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['/admin']);
  }


  home() {
    console.log(this.admin);
    this.service.login(this.admin).subscribe(data => {
      this.b = data;
      sessionStorage.setItem("admin", this.b.id);
      console.log(data);
      this.router.navigate(['/admindashboard'])
    }, error => {
      console.log(error);
    })
  }


  onSubmit(data: any) {
    console.log(data)
  }



}
