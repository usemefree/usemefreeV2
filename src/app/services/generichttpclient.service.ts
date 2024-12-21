import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerichttpclientService<T> {

  constructor(private http: HttpClient) { }

  public getdata(jsonUrl: string): Observable<T[]> {
    const data = this.http.get<any>(jsonUrl);
    return data;
  }
  
}
