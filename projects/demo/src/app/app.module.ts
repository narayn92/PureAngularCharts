import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { PureAngularChartsModule, ResponsiveContainerModule, BarChartModule, LineChartModule, SmoothLineChartModule, AreaChartModule, SmoothAreaChartModule, MultiTypeChartModule } from 'pure-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PureAngularChartsModule,
    // BarChartModule,
    // LineChartModule,
    // SmoothLineChartModule,
    // AreaChartModule,
    // SmoothAreaChartModule,
    // MultiTypeChartModule
    ResponsiveContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
