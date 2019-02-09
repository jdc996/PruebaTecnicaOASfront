import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { post } from 'selenium-webdriver/http';

const url="http://127.0.0.1:8080/v1";
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'content-type': 'application/json'
  }),
}
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http:HttpClient) { }

  get(tabla,parametro){
    return this.http.get(url+tabla+parametro,httpOptions).pipe(
      catchError(this.handleError)
    )
  }
  post(tabla,parametro){
    return this.http.post(url+tabla,parametro,httpOptions).pipe(
      catchError(this.handleError)
    )
  }
  delete(tabla,parametro){
    return this.http.delete(url+tabla,httpOptions).pipe(
      catchError(this.handleError));
  }
  update(tabla,parametro){
    return this.http.put(url+tabla,parametro,httpOptions).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError({
      status: error.status,
      message: 'Something bad happened; please try again later.',
    });
};
}
