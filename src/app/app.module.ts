import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MyDragulaModule } from './dragula/dragula.module';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    AppRoutingModule
  ],
  entryComponents: [
    LayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
