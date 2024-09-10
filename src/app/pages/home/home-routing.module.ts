import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Comp1Component } from 'src/app/components/comp1/comp1.component';
import { Comp2Component } from 'src/app/components/comp2/comp2.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'comp1',
        component: Comp1Component,
      },
      {
        path: 'comp2',
        component: Comp2Component,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
