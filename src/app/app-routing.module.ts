import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { userregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookingHistroyComponent } from './booking-histroy/booking-histroy.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserauthGuard } from './userauth.guard';
import { AdminauthGuard } from './adminauth.guard';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: '',component:WelcomePageComponent},
  {path: 'welcome',component:WelcomePageComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'user',component:UserComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userregistration',component:userregistrationComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'admindashboard', component:AdminDashboardComponent, canActivate:[AdminauthGuard]},
  {path: 'bookingdetails', component:BookingDetailsComponent, canActivate:[AdminauthGuard]},
  {path: 'manageflight', component:ManageFlightComponent, canActivate:[AdminauthGuard]} ,
  {path :'scheduleflight', component:ScheduleFlightComponent, canActivate:[AdminauthGuard]},
  {path: 'userdetails', component:UserDetailsComponent, canActivate:[AdminauthGuard]},
  {path:'userdashboard',component:UserDashboardComponent, canActivate:[UserauthGuard]},
  {path:'userhome',component:UserHomeComponent},
  {path:'booktickets',component:BookTicketComponent, canActivate:[UserauthGuard]},
  {path:'bookinghistory',component:BookingHistroyComponent},
  {path:'profile',component:ProfileComponent, canActivate:[UserauthGuard]},
  {path:'userlogin',component:UserloginComponent, canActivate:[UserauthGuard] },
  {path:'userfeedback', component:UserfeedbackComponent, canActivate:[UserauthGuard]},
  {path:'viewfeedback',component:ViewfeedbackComponent},
  {path: 'payment/:id', component:PaymentComponent, canActivate:[UserauthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserDashboardComponent,HomeComponent,BookTicketComponent,BookingHistroyComponent,
  ProfileComponent]