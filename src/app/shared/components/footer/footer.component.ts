import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentDate = new Date();
  myDate = this.currentDate.getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
