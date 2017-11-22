import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ReccService {

  private _url: string = "../assets/c.json"

  constructor( private _http: Http) { }

  getItems(){
    return this._http.get(this._url)
    .map((response : Response) => response.json());

  }

}
