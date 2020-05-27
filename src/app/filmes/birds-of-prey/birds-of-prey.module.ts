import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdsOfPreyPageRoutingModule } from './birds-of-prey-routing.module';

import { BirdsOfPreyPage } from './birds-of-prey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdsOfPreyPageRoutingModule
  ],
  declarations: [BirdsOfPreyPage]
})
export class BirdsOfPreyPageModule {}
