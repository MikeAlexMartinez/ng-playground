import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// To enable material animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// enable flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material component modules
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';

const COMPONENTS = [
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ].concat(COMPONENTS),
  exports: COMPONENTS,
  declarations: []
})
export class MaterialModule { }
