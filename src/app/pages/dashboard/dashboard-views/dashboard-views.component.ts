import { Component, AfterViewInit } from '@angular/core';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data: any = require('../data.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
  selector: 'app-dashboard-views',
  templateUrl: './dashboard-views.component.html',
  styleUrls: ['./dashboard-views.component.css']
})
export class DashboardViewsComponent implements AfterViewInit {

  // Barchart
  barChart1: Chart = {
    type: 'Pie',
    data: data.Pie,
    options: {
      seriesBarDistance: 15,
      high: 12,

      axisX: {
        showGrid: false,
        offset: 20
      },
      axisY: {
        showGrid: true,
        offset: 40
      },
      height: 360
    },

    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc(
              value: number,
              index: number
            ): string {
              return index % 1 === 0 ? `${value}` : null;
            }
          }
        }
      ]
    ]
  };

  // This is for the donute chart
  donuteChart1: Chart = {
    type: 'Pie',
    data: data.Pie,
    options: {
      donut: true,
      height: 260,
      showLabel: false,
      donutWidth: 20
    }
  };
  ngAfterViewInit() { }


}
