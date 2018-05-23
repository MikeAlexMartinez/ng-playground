import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragulaModule } from 'src/app/dragula/dragula.module';

const routes: Routes = [
  {
    path: 'dragula',
    component: DragulaModule 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
