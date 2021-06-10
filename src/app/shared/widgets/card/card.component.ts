import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label?: string;
  @Input() total?: string;
  @Input() percentage?: string;

  chartOptions: any = {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundcolor: null,
          borderwidth: 0,
          margin: [2,2,2,2],
          height: 80
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      xAxis: {
          // categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          // tickmarkPlacement: 'on',
          title: {
              // enabled: false
              text: null
          },
          labels: {
            enabled: false
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          // labels: {
          //     formatter: function () {
          //         return this.value / 1000;
          //     }
          // }
          labels: {
            enabled: false
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
      },
      tooltip: {
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
      // plotOptions: {
      //     area: {
      //         stacking: 'normal',
      //         lineColor: '#666666',
      //         lineWidth: 1,
      //         marker: {
      //             lineWidth: 1,
      //             lineColor: '#666666'
      //         }
      //     }
      // },
      series: [{
        // name: 'Nigeria',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
  }

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
