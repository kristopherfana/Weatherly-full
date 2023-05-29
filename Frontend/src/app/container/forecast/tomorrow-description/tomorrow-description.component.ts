import { Weather } from './../../../models/WeatherData';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DailyForecast } from 'src/app/models/Daily-Forecast';
import { WeatherService } from 'src/app/services/weather/weather-service.service';

@Component({
  selector: 'app-tomorrow-description',
  templateUrl: './tomorrow-description.component.html',
  styleUrls: ['./tomorrow-description.component.css'],
})
export class TomorrowDescriptionComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  temperatureTomorrow?: number;
  weekDayTomorrow?: string;
  descriptionTomorrow?: string;

  public lineChartData: ChartDataset[] = [
    {
      data: [15, 0, 30, 0, 30, 15],
      tension: 0.4,
      borderWidth: 1.25,
      borderColor: 'rgba(124, 236, 255, 0.75)',
      pointBackgroundColor: 'rgba(124, 236, 255, 0.75)',
      pointBorderColor: 'white',
      pointHoverBackgroundColor: '#55bae7',
      pointHoverBorderColor: '#55bae7',
      pointRadius: 2,
    },
  ];
  public lineChartLabels: BaseChartDirective['labels'] = [
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 / 0.5,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  ngOnInit(): void {
    this.weatherService.getDailyWeatherData().subscribe(
      (dailyForecastData: DailyForecast) => {
        this.temperatureTomorrow = dailyForecastData.list[0].temp.day;
        this.descriptionTomorrow = dailyForecastData.list[0].weather[0].description
        this.weekDayTomorrow = (new Date((dailyForecastData.list[0].dt) * 1000)).toLocaleString(undefined, {
          weekday: 'long'
        });
      }
    );
  }
}
