import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  percent = 80;

  bigChart: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    console.warn(this.bigChart);
  }

}
