import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getData()
  {
   return this.http.get(this.url);

  }

  createData(post)
  {
    return this.http.post(this.url,post);
  }


}
