import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  intYear: any;

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {
    this.intYear = new Date().getFullYear();
    // console.log(this.intYear);
    return this.intYear;
  }
}
