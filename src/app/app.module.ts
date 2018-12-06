import { MatIconModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IronmanComponent } from './ironman/ironman.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { PercentageComponent } from './percentage/percentage.component';
import { ThermometerComponent } from './thermometer/thermometer.component';

@NgModule({
  declarations: [
    AppComponent,
    IronmanComponent,
    LoadingSpinnerComponent,
    CountdownComponent,
    PercentageComponent,
    ThermometerComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FlexLayoutModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
