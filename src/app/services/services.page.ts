import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../Models/User';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  providers: [AngularFireAuth],
})
export class ServicesPage implements OnInit {

  user = {} as User;


  constructor(private auth: AngularFireAuth, public alertController: AlertController) { }

  ngOnInit() {
  }

 

  async presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();
  
    const alert = await alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    return await alert.present();
  }




}
