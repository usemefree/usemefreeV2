import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerichttpclientService<T> {

  constructor(private http: HttpClient) { }

  getdata = (jsonUrl: string): Observable<T[]> => this.http.get<any>(jsonUrl);

}
