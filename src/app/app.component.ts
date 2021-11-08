import { Text } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import {BackendService} from './backend.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author:any="";
  title:any="";
  description:any="";
  flag=true;
  constructor(public service:BackendService,
    private route:ActivatedRoute){
      this.checkParams();
  }
  putdata(){
    let data={"author":this.author,"title":this.title,"description":this.description};
    this.service.putdata(data).then((res:any)=>{
     // console.log(res);
      window.prompt("Copy to clipboard: Ctrl+C, Enter",window.location.href+'?id='+res.id);
    })
  }
  checkParams()
  {
    let params=this.route.queryParams.subscribe(res=>{
      if(res.id!=undefined)
      {
        this.flag=false;
        this.service.getdata({id:res.id}).then((data:any)=>{
          this.author=data.author;
          this.title=data.title;
          this.description=data.description;
        })
      }
    });
  }
}
