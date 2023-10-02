import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingDetailsRoutingModule } from './listing-details-routing.module';
import { ListingDetailsComponent } from './listing-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BookingListModule } from '../../booking/booking-list/booking-list.module';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    ListingDetailsRoutingModule,
    BookingListModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    NgbRating,
  ]
})
export class ListingDetailsModule { }
