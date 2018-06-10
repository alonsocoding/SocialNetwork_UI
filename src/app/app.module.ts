import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';


// Importing the AnimationsModule for Kendo UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing the ButtonsModule for Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    // Register the modules
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
