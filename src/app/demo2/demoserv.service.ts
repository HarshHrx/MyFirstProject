import { NotFoundError } from './not-found-error';
import { AppError } from './app-error';
import { BadInput } from './bad-input';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class DemoservService {
  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.url)
    .pipe(catchError(this.errorHandler));
  }

  createData(post):Observable<any>{
    return this.http.post(this.url,post)
    .pipe(catchError(this.errorHandler));
  }
  
  updateData(post,id):Observable<any>{
    return this.http.put(this.url + '/' + id,  post)
    .pipe(catchError(this.errorHandler));
  }

  deleteData(post):Observable<any>{
    return this.http.delete(this.url + '/' + post.userid)
    .pipe(catchError(this.errorHandler));
    
  }

  errorHandler(error:Response){
    if(error.status===400){
      console.log(error.status);
      return throwError(new BadInput());
    }
    if(error.status===404){
      console.log(error.status);
      return throwError(new NotFoundError());
    }
    else{
      console.log(error.status);
      return throwError(new AppError(error));
    }

  }
}
