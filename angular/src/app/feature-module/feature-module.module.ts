import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { AdminstrationAddComponent } from './adminstration/adminstration-add/adminstration-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeatureModuleModule { }
