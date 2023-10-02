import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingGridComponent } from './listing-grid/listing-grid.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from '../booking/booking-payment/booking-payment.component';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { InvoiceDetailsComponent } from '../booking/invoice-details/invoice-details.component';
import { Error404Component } from '../error/error404/error404.component';
import { Error500Component } from '../error/error500/error500.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  public routes: Routes = [
    {path: '/listings/listing-details/:licenceNumber', component : ListingDetailsComponent},
    {path: '/listings/listing-grid', component : ListingGridComponent},
    {path: '/pages/about-us' , component: AboutUsComponent},
    {path: '/authentication/register', component: RegisterComponent},
    {path: '/authentication/login', component: LoginComponent},
    {path: '/authentication/forgot-password', component: ForgotPasswordComponent},
    {path: '/authentication/reset-password', component: ResetPasswordComponent},
    {path: '/booking/booking-payment', component: BookingPaymentComponent},
    {path : '/booking/booking-list', component: BookingListComponent}, 
    {path: '/booking/invoice-details', component: InvoiceDetailsComponent}, 
    {path: '/error/error404', component: Error404Component}, 
    {path: '/error/error500', component: Error500Component}, 
    {path: '/pages/pricing', component: PricingComponent}, 
    {path: '/pages/faq', component: FaqComponent},
    {path: '/pages/gallery', component: GalleryComponent}
  ]
}
