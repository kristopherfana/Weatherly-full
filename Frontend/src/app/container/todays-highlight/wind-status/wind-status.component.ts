import { HourlyForecast, ListEntity } from './../../../models/Hourly-Forecast';
import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { WeatherService } from 'src/app/services/weather/weather-service.service';


@Component({
  selector: 'app-wind-status',
  templateUrl: './wind-status.component.html',
  styleUrls: ['./wind-status.component.css']
})
export class WindStatusComponent implements OnInit {

  hourlyForecast?: [];
  windSpeed?: number;
  windSpeedList: number[] = [];
  windChartData: ChartDataset[] = [];
  windChartLabels: BaseChartDirective['labels'] = [];
  windLineChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: 0
    },
    maintainAspectRatio: true,
    aspectRatio: 0.5 / 0.125,
    scales: {

      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };
  windBarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 0.1 / 0.015,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };
  windChartType: ChartType = 'line';
  windBarChartType: ChartType = 'bar';
  windChartLegend = false;
  time?: string;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getHourlyWeatherData().subscribe(
      (hourlyForecast: HourlyForecast) => {
        hourlyForecast.list.slice(0, 20).forEach((listEntity: ListEntity) => {

          this.windSpeed = listEntity.wind.speed;
          this.time = (new Date((listEntity.dt) * 1000)).toLocaleTimeString();
          this.windSpeedList.push(this.windSpeed);
          this.windChartLabels?.push("")
        }),
          this.windChartData = [
            {
              data: this.windSpeedList,
              tension: 0.7,
              borderWidth: 1.5,
              borderColor: 'rgba(190,190,190,0.6)',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              backgroundColor: 'rgba(190,190,190,0.6)',
              barThickness: 3

            }
          ];
      }
    );

  }


}
