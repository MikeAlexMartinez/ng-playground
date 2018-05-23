import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// To enable material animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Material component modules
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
