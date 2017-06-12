import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs'
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import * as firebase from 'firebase';
import * as moment from 'moment';
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
                CreateTime:moment.unix(data[i].CreateTime/1000).format("YYYY/MM/DD hh:mm:ss"), //data[i].CreateTime,// (new Date(data[i].CreateTime)).format("dd.mm.yyyy hh:MM:ss"),


                UpdateTime: moment.unix(data[i].UpdateTime/1000).format("YYYY/MM/DD hh:mm:ss"),
                id:data[i].id
           })
        }
        return listdata;
      }
    ).share();
  }


}
