import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdsOfPreyPage } from './birds-of-prey.page';

const routes: Routes = [
  {
    path: '',
    component: BirdsOfPreyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdsOfPreyPageRoutingModule {}
