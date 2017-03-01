import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';  // this import is done to maintain the connection with the ionic cloud


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '565e88fd' // App ID of the current application
  },
  'push': {
    'sender_id': '1049460624041', // Sender ID of the Firebase cloud
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,        //Declarations for the various pages present in the app
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)  // using the imports of the cloud 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
