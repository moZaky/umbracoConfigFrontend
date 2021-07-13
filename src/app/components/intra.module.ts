import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as COMPONENTS from './intra';
import { IntraRoutingModule } from './intra-routing.module';
import { HomeComponent } from './intra/home/home.component'


@NgModule({
  declarations: [
    COMPONENTS.NewsComponent,
    COMPONENTS.SingleEventComponent,
    COMPONENTS.EventsComponent,
    COMPONENTS.SingleNewsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    IntraRoutingModule
  ]
})
export class IntraModule { }
