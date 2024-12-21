import { Injectable } from '@angular/core';
import { GenerichttpclientService } from './generichttpclient.service';
import { SoftwareData } from '../models/SoftwareData';
import { GlobalConstants } from '../common/global-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwaredataService {

  Url: string = `${GlobalConstants.JsonFilePath}packageWindows.json`;

  constructor(private service: GenerichttpclientService<SoftwareData>) { }

  getData(): Observable<SoftwareData[]> {
    console.log(this.Url);
    const data= this.service.getdata(this.Url);
    return data;
  }
}
