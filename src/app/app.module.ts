import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MyDragulaModule } from './dragula/dragula.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MyDragulaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
