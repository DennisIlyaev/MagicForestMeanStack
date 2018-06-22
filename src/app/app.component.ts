import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  hoveredDivId;

  setHoverDivId(divId: number) {
    this.hoveredDivId = divId;
  }

  removeHoverDivId() {
    this.hoveredDivId = null;
  }


}

