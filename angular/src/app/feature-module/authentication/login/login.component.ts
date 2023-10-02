import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthenticationRequest, User } from 'src/app/shared/services/model/model';
import { UserService } from 'src/app/shared/services/user.service';
import { ListingDetailsComponent } from '../../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { BookingPaymentComponent } from '../../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../../error/error404/error404.component';
import { Error500Component } from '../../error/error500/error500.component';
import { PricingComponent } from '../../pages/pricing/pricing.component';
import { FaqComponent } from '../../pages/faq/faq.component';
import { GalleryComponent } from '../../pages/gallery/gallery.component';
import { HomeComponent } from '../../home/home.component';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    {path : '/booking/booking-list/:licenceNumber/:startDate/:endDate/:pickUp/:dropOff/:userName/:phone', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent},
    {path : "home", component  : HomeComponent}
  ];
  public show_password = true;
  public userExist: boolean = true;

  form = new FormGroup({
    email: new FormControl('login@exemple.xyz', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService, private userService : UserService, private router: Router, private data: DataService) {}

  // signin() {
  //   if (this.form.valid) {
  //     this.auth.signin();
  //   }
  // }

  login(){
    let request: AuthenticationRequest;
    request = new AuthenticationRequest(this.form.value.email!, this.form.value.password!);
    let response = this.userService.login(request).subscribe(
      (response: any) => {
        this.auth.setToken(response.token);
        this.auth.setRoles(response.user.role);
        this.auth.setUser(response.user);
        this.data.changeUser(true);
        this.userExist = true;
        if(response.user.role === 'USER'){
          this.router.navigate(['home']);
        }else{
          this.router.navigate(['/admin']);
        }
      },
      (error) => {
        this.userExist = false;
      }
    );
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }
}
