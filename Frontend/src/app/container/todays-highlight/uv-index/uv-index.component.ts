import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.css']
})
export class UvIndexComponent implements OnInit {

  uvChartType: ChartType = 'doughnut';
  uvChartOptions: ChartOptions = {
    elements: {
      arc: {
        borderWidth: 0,
        backgroundColor: '#eee',
        hoverBackgroundColor: '#eee',
        borderColor: '#eee'
      }
    },
    scales: {
      y: {
        display: false,
        ticks: {
          maxTicksLimit: 8,

        }
      }
    }
  };
  uvChartLegend: boolean = false;
  uvChartData: ChartDataset[] = [
    {
      rotation: 270,
      circumference: 180,
      data: [5, 3],
      tension: 0.7,
      borderWidth: 1.5,
      borderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      barThickness: 3,
      backgroundColor: [
        'blue',
        'transparent'
      ]
    }
  ];
  uvChartLabels: BaseChartDirective['labels'] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
