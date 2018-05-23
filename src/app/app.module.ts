import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { DragulaModule } from './dragula/dragula.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    DragulaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
