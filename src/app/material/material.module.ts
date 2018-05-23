import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// To enable material animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// enable flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material component modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
