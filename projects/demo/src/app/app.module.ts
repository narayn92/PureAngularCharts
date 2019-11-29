import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PureAngularChartsModule } from 'pure-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PureAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
