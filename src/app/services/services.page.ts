import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../Models/User';
import { AngularFireDatabase } from 'angularfire2/database';


//import { Observable } from 'rxjs/Observable';
import { webSocket } from 'rxjs/webSocket';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  providers: [AngularFireAuth],
})
export class ServicesPage implements OnInit {

  private PATH = "/departamento";

  user = {} as User;


  constructor(private auth: AngularFireAuth, public db: AngularFireDatabase) { }

  ngOnInit() {
  }

/*
  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

*/


}
