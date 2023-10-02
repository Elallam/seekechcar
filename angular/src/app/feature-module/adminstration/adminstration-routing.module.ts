import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminstrationAddComponent } from './adminstration-add/adminstration-add.component';


const routes: Routes = [
  {path : 'adminstration-add', component: AdminstrationAddComponent},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminstrationRoutingModule { }