import { Weather } from './../../models/WeatherData';
import { Component, OnInit } from '@angular/core';
import { DailyForecast } from 'src/app/models/Daily-Forecast';
import { WeatherService } from 'src/app/services/weather/weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  weatherData?: Weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.weatherData = data;
      }
    );
  }

}
