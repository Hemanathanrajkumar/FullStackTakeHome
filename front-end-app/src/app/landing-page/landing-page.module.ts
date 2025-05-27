import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ComponentsModule
  ]
})
export class LandingPageModule { }
