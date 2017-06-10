import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs'
import { AngularFireDatabase,FirebaseObjectObservable } from "angularfire2/database";
import * as firebase from 'firebase';
@Injectable()
export class MetaformService {

  constructor(private http:Http,private db: AngularFireDatabase) { }
  GetMetaformData(){

   return  this.http.get("http://localhost:3000/FormMeta")
       .map(res => res.json()).share();
 // return this.db.object('/MetaformData').share();
  }
  test(){
   return  firebase.storage().ref()
  }

}
