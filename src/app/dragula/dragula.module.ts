import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from '../material/material.module';

import { DragulaRoutingModule } from './dragula-routing.module';

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
