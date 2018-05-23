import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDragulaModule } from 'src/app/dragula/dragula.module';

const routes: Routes = [
  {
    path: 'dragula',
    component: MyDragulaModule 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
