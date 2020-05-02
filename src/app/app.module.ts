import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicensingComponent } from './licensing/licensing.component';
import { ExamsComponent } from './exams/exams.component';

@NgModule({
  declarations: [
    AppComponent,
    LicensingComponent,
    ExamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
