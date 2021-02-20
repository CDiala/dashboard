import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('toggle-sidebar') toggleSidebar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  menuClicked() {
    this.toggleSidebar.emit();
  }
}
