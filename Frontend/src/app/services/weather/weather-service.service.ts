import { Weather } from './../../models/WeatherData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { LocationService } from '../location/location.service';
import { DailyForecast } from 'src/app/models/Daily-Forecast';
import { HourlyForecast } from 'src/app/models/Hourly-Forecast';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private currentWeatherApiUrl = 'http://localhost:8080/api/weather/current';
  private dailyWeatherApiUrl = 'http://localhost:8080/api/weather/daily';
  private hourlyWeatherApiUrl = 'http://localhost:8080/api/weather/hourly';

  constructor(
    private http: HttpClient,
    private locationService: LocationService
  ) { }

  getWeatherData(): Observable<Weather> {
    return this.locationService.getCurrentLocation().pipe(
      tap((location) => console.log('Current location:', location)),
      map((location) => `${this.currentWeatherApiUrl}?lat=${location.latitude}&lon=${location.longitude}`),
      tap((currentWeatherApiUrl) => console.log('API URL:', currentWeatherApiUrl)),
      switchMap((currentWeatherApiUrl) => this.http.get<Weather>(currentWeatherApiUrl)),
      tap((data) => console.log('Weather data:', data)),
      map((data) => data as Weather),
      tap((weather) => console.log('Mapped weather:', weather))
    )
  }
  getDailyWeatherData(): Observable<DailyForecast> {
    return this.locationService.getCurrentLocation().pipe(
      tap((location) => console.log('Current location:', location)),
      map((location) => `${this.dailyWeatherApiUrl}?lat=${location.latitude}&lon=${location.longitude}`),
      tap((dailyWeatherApiUrl) => console.log('API URL:', dailyWeatherApiUrl)),
      switchMap((dailyWeatherApiUrl) => this.http.get(dailyWeatherApiUrl)),
      tap((data) => console.log('Daily Weather data:', data)),
      map((data) => data as DailyForecast),
      tap((daily) => console.log('Mapped daily weather:', daily))
    );
  }
  getHourlyWeatherData(): Observable<HourlyForecast> {
    return this.locationService.getCurrentLocation().pipe(
      tap((location) => console.log('Current location:', location)),
      map((location) => `${this.hourlyWeatherApiUrl}?lat=${location.latitude}&lon=${location.longitude}`),
      tap((hourlyWeatherApiUrl) => console.log('API URL:', hourlyWeatherApiUrl)),
      switchMap((hourlyWeatherApiUrl) => this.http.get(hourlyWeatherApiUrl)),
      tap((data) => console.log('Hourly Weather data:', data)),
      map((data) => data as HourlyForecast)
      , tap((hourly) => console.log('Mapped hourly weather:', hourly))
    );
  }
}