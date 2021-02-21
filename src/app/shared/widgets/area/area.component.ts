import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        // text: 'Historic and Estimated Worldwide Population Growth by Region'
        text: 'Sample Data'
      },
      subtitle: {
        // text: 'Source: Wikipedia.org'
        text: 'Demo'
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Billions'
        },
        // labels: {
        //   formatter(): number {
        //     return this.value / 1000;
        //   }
        // }
      },
      tooltip: {
        split: true,
        // outside: true
        // valueSuffix: ' millions'
      },
      legend: {
        // enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
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
        name: 'Nigeria',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Togo',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Algeria',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'Ethiopia',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Cote D\'Ivoire',
        data: [2, 2, 2, 6, 13, 30, 46]
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
