import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { NavigationComponent } from './container/navigation/navigation.component';
import { CurrentWeatherComponent } from './container/current-weather/current-weather.component';
import { TodaysHighlightComponent } from './container/todays-highlight/todays-highlight.component';
import { ForecastComponent } from './container/forecast/forecast.component';
import { WeatherMapComponent } from './container/weather-map/weather-map.component';
import { MatCardModule } from '@angular/material/card';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { TomorrowDescriptionComponent } from './container/forecast/tomorrow-description/tomorrow-description.component';
import { WindStatusComponent } from './container/todays-highlight/wind-status/wind-status.component';
import { UvIndexComponent } from './container/todays-highlight/uv-index/uv-index.component';
import { SunriseSunsetComponent } from './container/todays-highlight/sunrise-sunset/sunrise-sunset.component';
import { HumidityComponent } from './container/todays-highlight/humidity/humidity.component';
import { VisibilityComponent } from './container/todays-highlight/visibility/visibility.component';
import { FeelsLikeComponent } from './container/todays-highlight/feels-like/feels-like.component';
import { NoopAnimationPlayer } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavigationComponent,
    CurrentWeatherComponent,
    TodaysHighlightComponent,
    ForecastComponent,
    WeatherMapComponent,
    TomorrowDescriptionComponent,
    WindStatusComponent,
    UvIndexComponent,
    SunriseSunsetComponent,
    HumidityComponent,
    VisibilityComponent,
    FeelsLikeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
