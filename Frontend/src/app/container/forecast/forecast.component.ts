import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { WeatherService } from 'src/app/services/weather/weather-service.service';
import { DailyForecast, ListEntity } from 'src/app/models/Daily-Forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {

  public temperatures: { [key: string]: number } = {};
  public days: string[] = [];
  data = [];

  constructor(library: FaIconLibrary, private weatherService: WeatherService) {
    library.addIconPacks(fas, far);
  }

  public isLoaded = false;

  ngOnInit() {
    this.weatherService.getDailyWeatherData().subscribe(
      (data: DailyForecast) => {
        data.list.slice(0, 7).forEach((listEntity: ListEntity) => {
          const date = new Date(listEntity.dt * 1000);
          const day = date.toLocaleDateString(undefined, { weekday: 'short' });
          const temperature = Math.round(listEntity.temp.day);
          this.temperatures[day] = temperature;
          this.days.push(day);
        });
      },
      (error) => console.log(error)
    )
  }
}
