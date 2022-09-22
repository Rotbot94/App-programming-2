import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
})
export class GeolocationComponent {
  latitude: any;
  longtitude: any;

  constructor(private geolocation: Geolocation) {}

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longtitude = resp.coords.longitude;
      console.log(this.latitude);
      console.log(this.longtitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
