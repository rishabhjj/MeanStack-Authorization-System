import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CategoriesService {

  private _url: string = "../assets/cate.json"

  constructor( private _http: Http) { }

  getCategories(){
    return this._http.get(this._url)
    .map((response : Response) => response.json());

  }

}
