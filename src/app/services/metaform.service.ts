import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs'
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import * as firebase from 'firebase';
@Injectable()
export class MetaformService {

  constructor(private http: Http, private db: AngularFireDatabase) { }
  GetMetaformData() {
    return this.db.object('/MetaformData').share();
  }

  GetFormData() {
   return this.db.list('/FormData')
   .map(
      data=>{
        let listdata=[]
        for(let i=0;i<data.length;i++){
           listdata.push( {

                title:data[i].title,
                CreateTime:data[i].CreateTime,
                UpdateTime:data[i].UpdateTime,
                id:data[i].id
           })
        }
        return listdata;
        //console.log(data[0])
      }
    ).share();
  }


}
