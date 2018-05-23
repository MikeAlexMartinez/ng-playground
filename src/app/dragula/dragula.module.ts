import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaComponent } from './dragula/dragula.component';

import { DragulaRoutingModule } from './dragula-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DragulaRoutingModule
  ],
  exports: [
    DragulaComponent
  ],
  declarations: [DragulaComponent]
})
export class DragulaModule { }
