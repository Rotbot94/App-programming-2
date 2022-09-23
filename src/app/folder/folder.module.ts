import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import {ListComponent} from '../list/list.component';
import {GeolocationComponent} from '../geolocation/geolocation.component';
import {OrientationComponent} from '../orientation/orientation.component';
import {ScreenOrientation} from '@awesome-cordova-plugins/screen-orientation/ngx';
import {DraggableComponent} from '../draggable/draggable.component';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {PMovementComponent} from '../p-movement/p-movement.component';
import {CombinedComponent} from '../combined/combined.component';
import { Shake } from '@ionic-native/shake/ngx';
import {AsyncComponent} from "../async/async.component";
import {WebapiComponent} from "../webapi/webapi.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ], declarations: [
    FolderPage,
    ListComponent,
    GeolocationComponent,
    OrientationComponent,
    DraggableComponent,
    PMovementComponent,
    CombinedComponent,
    AsyncComponent,
    WebapiComponent
  ],
  providers: [Geolocation, ScreenOrientation, Shake ]
})
export class FolderPageModule {}
