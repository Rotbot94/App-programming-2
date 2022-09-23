import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lister og Persistent Data', url: '/folder/List', icon: 'list' },
    { title: 'Sensor/Geolocation', url: '/folder/Geolocation', icon: 'globe' },
    { title: 'Orientation', url: '/folder/Orientation', icon: 'phone-landscape' },
    { title: 'Draggable', url: '/folder/Draggable', icon: 'move' },
    { title: 'Programmed Movement', url: '/folder/p-movement', icon: 'bicycle' },
    { title: 'Asynkrone kald', url: '/folder/Async', icon: 'time' },
    { title: 'Webapi', url: '/folder/Webapi', icon: 'trash' },
  ];
  constructor() {}
}
