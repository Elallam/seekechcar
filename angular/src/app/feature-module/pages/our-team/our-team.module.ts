import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import { OurTeamComponent } from './our-team.component';


@NgModule({
  declarations: [
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    OurTeamRoutingModule
  ]
})
export class OurTeamModule { }
