import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPage } from './error.page';
import { defineCustomElements } from '@teamhive/lottie-player/loader';


const routes: Routes = [
  {
    path: '',
    component: ErrorPage
  }
];

defineCustomElements(window);


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorPageRoutingModule {}
