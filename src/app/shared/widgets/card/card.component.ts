import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title') label: string = '';
  @Input('total') total: string = '';
  @Input('percentage') percentage: string = '';

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 80
      },
      title: {
        // text: 'Historic and Estimated Worldwide Population Growth by Region'
        text: null
      },
      subtitle: {
        // text: 'Source: Wikipedia.org'
        text: null
      },
      tooltip: {
        // enabled: false,
        split: true,
        outside: true
        // valueSuffix: ' millions'
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [{
      //   name: 'Nigeria',
      //   data: [502, 635, 809, 947, 1402, 3634, 5268]
      // }, {
      //   name: 'Togo',
      //   data: [106, 107, 111, 133, 221, 767, 1766]
      // }, {
      //   name: 'Algeria',
      //   data: [6, 6, 6, 10, 17, 29, 37]
      // }, {
        name: 'Ethiopia',
        data: [0.4, 0.6, 1.0, 2, 3.5, 5.8, 8.4]
      }, {
        name: 'Cote D\'Ivoire',
        data: [0.4, 0.6, 1.0, 2, 3.5, 5.8, 8.4]
      }]
    };

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
