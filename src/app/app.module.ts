import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChestUsgComponent } from './chest-usg/chest-usg.component';
import { ThyroidUltrasoundComponent } from './thyroid-ultrasound/thyroid-ultrasound.component';
import { AbdominalCavityUltrasoundComponent } from './abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component';
import {NgxPrintModule} from 'ngx-print';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChestUsgComponent,
    ThyroidUltrasoundComponent,
    AbdominalCavityUltrasoundComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
