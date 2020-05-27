import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StargirlPage } from './stargirl.page';

const routes: Routes = [
  {
    path: '',
    component: StargirlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StargirlPageRoutingModule {}
