import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-movement',
  templateUrl: './p-movement.component.html',
  styleUrls: ['./p-movement.component.scss']
})
export class PMovementComponent {

  boxStyle = 'box-default';

  constructor() { }

  transform() {
    if(this.boxStyle === 'box-default') {
      this.boxStyle = 'box-moved';
    } else {
      this.boxStyle = 'box-default';
    }
  }

}
