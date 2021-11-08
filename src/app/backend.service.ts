import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public http:HttpClient) { }
  public getdata(data:any){
    return this.http.post("http://localhost:3000/data/",data).toPromise();
  }
  public putdata(data:any){
    return this.http.post("http://localhost:3000/add",data).toPromise();
  }
}
