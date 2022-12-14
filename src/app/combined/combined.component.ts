import { Component, OnInit } from '@angular/core';
import { Shake } from '@ionic-native/shake/ngx';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss'],
})
export class CombinedComponent implements OnInit {

  boxStyle = 'box-default';
  active = false;

  constructor(private shake: Shake) { }

  ngOnInit() {
      this.shake.startWatch(30).subscribe(data => {
      if(this.boxStyle === 'box-default') {
        this.boxStyle = 'box-moved';
      } else {
        this.boxStyle = 'box-default';
      }
    });
  }
}
