import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third party modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { ScrollRoutingModule } from './scroll-routing.module';

import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PerfectScrollbarModule,
    ScrollRoutingModule
  ],
  declarations: [ScrollDemoComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ScrollModule { }
