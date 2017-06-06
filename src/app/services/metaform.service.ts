import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs'
@Injectable()
export class MetaformService {

  constructor(private http:Http) { }
  GetMetaformData(){
  return  this.http.get("http://localhost:3000/FormMeta")
      .map(res => res.json()).share();
  }

}
