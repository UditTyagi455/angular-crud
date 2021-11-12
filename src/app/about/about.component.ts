import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ServiceComponent} from "../service/service.component"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 

  constructor(private _msgService:ServiceComponent) { }


  ngOnInit(): void {
  }
  postData(data:any){
    console.log(data);
    this._msgService.apiPostData(data).subscribe(my =>{
      console.log(my);
    })
  }
}
