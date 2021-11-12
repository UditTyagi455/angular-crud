import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  apiFun():Observable<any>{
    return this.http.get('http://localhost:3000/posts')
  }
  apiPostData(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/posts',data)
  }
  apiDeleteData(data:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/posts/${data}`)
  } 
  
}
