import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
})
export class OrientationComponent {

  orientation: any;

  constructor(
    private screenOrientation: ScreenOrientation,
  ) { }

  getCurrentOrientation() {
    this.orientation = this.screenOrientation.type;
    console.log(this.orientation);
  }


}
