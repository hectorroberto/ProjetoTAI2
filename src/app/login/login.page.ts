import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AngularFireAuth],
})
export class LoginPage implements OnInit {

  user = { } as User;

  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

 
  goRregisterPage(){
    this.router.navigateByUrl('/register');

  }

  goServicesPage(){
    this.router.navigateByUrl('/services');
  }

  login(){
    try{
      const result = this.auth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      this.goServicesPage();
    } catch(e){
      console.error(e);
    }
  }

}
