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
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
