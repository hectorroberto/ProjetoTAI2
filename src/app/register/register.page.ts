import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [AngularFireAuth],
})
export class RegisterPage implements OnInit {

  user = {} as User;


  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }
  public goToLoginPage(){
    this.router.navigateByUrl('/login')

  }


  async register(user: User){
    try{
      const result = this.auth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
      this.goToLoginPage();
    }catch(e){
      console.error(e);
    }


  }

}
