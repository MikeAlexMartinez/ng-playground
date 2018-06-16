import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party modules
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MyDragulaModule } from './dragula/dragula.module';
import { ResizeModule } from './resize/resize.module';
import { ScrollModule } from './scroll/scroll.module';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MyDragulaModule,
    ResizeModule,
    ScrollModule,
    AppRoutingModule
  ],
  entryComponents: [
    LayoutComponent
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
