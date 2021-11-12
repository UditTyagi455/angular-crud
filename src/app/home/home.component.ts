import { Component, OnInit } from '@angular/core';
import {ServiceComponent} from "../service/service.component"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item:string="Laptop";
  prop1:string="";
  constructor(private _msgService:ServiceComponent) { }
    myApidata:any;
  ngOnInit(): void {
    this._msgService.apiFun().subscribe(hello =>{
      console.log(hello);
      this.myApidata =hello
    });
  }
 

  parentFun(hello:any){
    this.prop1 =hello;
  }

  
  deleteData(data:any){
    this._msgService.apiDeleteData(data.id).subscribe(del =>{
      console.log(del);
    })
     
  }
 
}
