import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StargirlPageRoutingModule } from './stargirl-routing.module';

import { StargirlPage } from './stargirl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StargirlPageRoutingModule
  ],
  declarations: [StargirlPage]
})
export class StargirlPageModule {}
