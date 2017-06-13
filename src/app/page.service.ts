import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PageService {
  pages: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.pages = database.list('pages');
  }

  getPageById(id){
    return this.database.object('pages/'+(id-1));
  }

}
