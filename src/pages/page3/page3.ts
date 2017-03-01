import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import {Database} from '@ionic/cloud-angular';

@Component({
  selector: 'page-page3',
 templateUrl: 'page3.html'
})
export class Page3 {


  constructor(public alertCtrl: AlertController,public db: Database) {
    this.db.connect();
    
  
    
  }

  calme()
  {

  	let prompt = this.alertCtrl.create({
      title: 'Register',
      message: "Details",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Title'
        },
        {
          name: 'Email',
          placeholder: 'email'
        },
        {
          name: 'phone',
          placeholder: 'phone'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: 'Register',
          handler: data => {
            console.log('Saved clicked');
            console.log(data.Name);
            console.log(data.Email);
            console.log(data.phone);
            const dataentry = this.db.collection('hhouse');

            dataentry.store({
                 Name: data.Name,
                 Email: data.Email ,
                 Phone: data.phone
            });
          }
        }
      ]
    });
    prompt.present();
  }

  sendme()
  {

  }

}
