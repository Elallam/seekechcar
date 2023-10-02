import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminstrationComponent } from './adminstration.component';
import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminstrationBookingComponent } from './adminstration-booking/adminstration-booking.component';



@NgModule({
  declarations: [
    AdminstrationComponent,
    AdminstrationBookingComponent
  ],
  imports: [
    CommonModule,
    AdminstrationRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AdminstrationModule { }
