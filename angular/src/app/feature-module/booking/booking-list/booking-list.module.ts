import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingListRoutingModule } from './booking-list-routing.module';
import { BookingListComponent } from './booking-list.component';
import { BookingServiceService } from 'src/app/shared/services/booking-service.service';
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { MessageClient } from "cloudmailin"

@NgModule({
  declarations: [
    BookingListComponent
  ],
  imports: [
    CommonModule,
    BookingListRoutingModule,
    SocialLoginModule
  ],
  providers:[
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '913867627954-0v6ha5b4fbi6bqahgnelhum7if43bf7f.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class BookingListModule{
}
