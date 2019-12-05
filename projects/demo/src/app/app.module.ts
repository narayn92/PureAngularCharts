import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { PureAngularChartsModule, ResponsiveContainerModule, BarChartModule, LineChartModule, SmoothLineChartModule, AreaChartModule, SmoothAreaChartModule, MultiTypeChartModule } from 'pure-angular-charts';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgJsonEditorModule,
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
