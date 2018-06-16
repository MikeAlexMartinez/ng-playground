import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ResizableModule } from 'angular-resizable-element';
import { MaterialModule } from '../material/material.module';

import { ResizeRoutingModule } from './resize-routing.module';

import { ResizeDemoComponent } from './resize-demo/resize-demo.component';
import { MyResizeComponent } from './my-resize/my-resize.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ResizableModule,
    ResizeRoutingModule,
    MaterialModule
  ],
  declarations: [
    ResizeDemoComponent,
    MyResizeComponent,
    ContainerComponent
  ]
})
export class ResizeModule { }
