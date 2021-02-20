import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  isOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isOpened = !this.isOpened;
    console.log("clicked...")
  }
}
