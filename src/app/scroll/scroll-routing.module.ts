import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';

const routes: Routes = [
  { path: 'scroll', component: ScrollDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollRoutingModule {}
