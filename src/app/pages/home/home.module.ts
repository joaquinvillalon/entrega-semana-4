import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { Comp1Component } from 'src/app/components/comp1/comp1.component';
import { Comp2Component } from 'src/app/components/comp2/comp2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, Comp1Component, Comp2Component]
})
export class HomePageModule {}
