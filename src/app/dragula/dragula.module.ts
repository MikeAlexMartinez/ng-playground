import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragulaRoutingModule } from './dragula-routing.module';
import { MaterialModule } from '../material/material.module';
import { DragulaModule } from 'ng2-dragula';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DragulaComponent } from './dragula/dragula.component';
import { DragulaChatComponent } from './dragula-chat/dragula-chat.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    DragulaModule,
    DragulaRoutingModule,
    MaterialModule
  ],
  exports: [
  ],
  declarations: [
    DragulaComponent,
    DragulaChatComponent
  ]
})
export class MyDragulaModule { }
