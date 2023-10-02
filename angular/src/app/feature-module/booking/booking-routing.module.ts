import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ListingDetailsComponent } from '../listings/listing-details/listing-details.component';
import { ListingGridComponent } from '../listings/listing-grid/listing-grid.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../authentication/reset-password/reset-password.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { Error404Component } from '../error/error404/error404.component';
import { Error500Component } from '../error/error500/error500.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';

const routes: Routes = [
  {path : 'booking-list', component: BookingListComponent}, 
  {path: 'invoice-details', component: InvoiceDetailsComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
