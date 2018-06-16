import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Importing the AnimationsModule for Kendo UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing the ButtonsModule for Kendo UI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './services/alertify.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // Register the modules
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
