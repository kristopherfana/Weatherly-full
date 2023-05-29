import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-todays-highlight',
  templateUrl: './todays-highlight.component.html',
  styleUrls: ['./todays-highlight.component.css'],
})
export class TodaysHighlightComponent implements OnInit {
  constructor() { }

  //Wind Status
  public windStatusChartData: ChartDataset[] = [
    {
      data: [15, 0, 30, 0, 30, 15],
      label: '',
      fill: false,
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
    layout: {
      autoPadding: true,
    },
  };

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  ngOnInit(): void { }
}
