import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular'; // this is imported for supporting the push feature
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';


@Component({
  templateUrl: 'app.html' // specifies the current url of the page to be displayed
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [							
      { title: 'Home', component: Page1 },
      { title: 'Listing', component: Page2 },
      { title: 'Events', component: Page3 },
      { title: 'Gallery', component: Page4 },
      { title: 'Contact', component: Page5 },
      { title: 'Server', component: Page6 }
    ];

    this.push.register().then((t: PushToken) => {
  return this.push.saveToken(t);
}).then((t: PushToken) => {
  console.log('Token saved:', t.token); // registering the tokens
});

this.push.rx.notification()
  .subscribe((msg) => {
    alert(msg.title + ': ' + msg.text); // push notifications alerts type.
  });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
