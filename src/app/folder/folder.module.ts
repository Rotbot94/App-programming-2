import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import {ListComponent} from '../list/list.component';
import {GeolocationComponent} from '../geolocation/geolocation.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {OrientationComponent} from '../orientation/orientation.component';
import {ScreenOrientation} from '@awesome-cordova-plugins/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, ListComponent, GeolocationComponent, OrientationComponent],
  providers: [Geolocation, ScreenOrientation]
})
export class FolderPageModule {}
