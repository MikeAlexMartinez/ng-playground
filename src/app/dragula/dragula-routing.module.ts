import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragulaComponent } from './dragula/dragula.component';
import { DragulaChatComponent } from './dragula-chat/dragula-chat.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DragulaComponent
  },
  {
    path: 'chat',
    component: DragulaChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragulaRoutingModule { }
