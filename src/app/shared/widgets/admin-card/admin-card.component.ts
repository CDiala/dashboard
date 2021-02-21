// Note: @fortawesome/angular-fontawesome is required for this component to render its icons
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {

  @Input('title') adminCardTitle: string = '';
  @Input('value') adminCardValue: string = '';
  @Input('icon') cardIcon: any;
  @Input('side-color') borderColor: any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
