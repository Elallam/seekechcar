import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { header } from 'src/app/shared/services/model/model';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';
import { ListingDetailsComponent } from '../../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { LoginComponent } from '../../authentication/login/login.component';
import { ForgotPasswordComponent } from '../../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from '../../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../../error/error404/error404.component';
import { Error500Component } from '../../error/error500/error500.component';
import { PricingComponent } from '../../pages/pricing/pricing.component';
import { FaqComponent } from '../../pages/faq/faq.component';
import { GalleryComponent } from '../../pages/gallery/gallery.component';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  public routes : Routes = [
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
  ]
  public isLoggedIn?  : boolean;
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }
  ngOnInit(): void {
    this.data.isLogged.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }

  public logout(){
    this.authService.clear();
    this.data.changeUser(false);
    // window.location.reload();
  }
  
  public login(){
    this.isLoggedIn = !this.isLoggedIn;
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();

  }
}
