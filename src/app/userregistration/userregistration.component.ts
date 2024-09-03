import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from '../model/User';
import { UserloginComponent } from '../userlogin/userlogin.component';
import { UserLoginService } from '../services/user-login.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
 
})
export class userregistrationComponent implements OnInit {
  
  onsubmit(data: any){
    console.log(data);
  }
  [x: string]: {};
  
  constructor(private router:Router, private service: UserLoginService) {
   
   }

  user=new User();
  ngOnInit(): void {
    
  }
  back(){
    this.router.navigate(['/user']);
  }
  login(){
    this.router.navigate(['/userlogin'])
  }
 
  title = 'Template-Driven-Form';
  submitted = false;
  fullname: any;
  onSubmit(f: NgForm) {
  
    this.submitted=true;
    console.log("Form Submitted!")
    console.log(f.value);
  }
  genders = ['Male', 'Female', 'Trans'];

  userreg(){
    this.service.register(this.user).subscribe(data=>{
      alert("Registered Succesfull!!!");
      this.router.navigate(["/userlogin"]);
    },
    error=>{
      alert("User not Registered!!!");
    }
    )

  }
}
