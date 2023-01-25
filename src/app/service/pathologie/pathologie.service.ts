import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { INDEX_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {

  constructor(private http: HttpClient) { }

  calculer(index:number):Observable<any>{
    let params = new HttpParams().append("index", index)
    return this.http.get(INDEX_URL,{params : params})
    .pipe();
  }
}
