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
    switch (GlobalConstants.currentOperatingS.toString()) {
      case '1':
        this.Url = `${GlobalConstants.JsonFilePath}packageWindows.json`;
        break;
      case '2':
        this.Url = `${GlobalConstants.JsonFilePath}packageLinux.json`;
        break;
      case '3':
        this.Url = `${GlobalConstants.JsonFilePath}packageMac.json`;
        break;
      case '4':
        this.Url = `${GlobalConstants.JsonFilePath}packageAndroid.json`;
        break;
      default:
        this.Url = `${GlobalConstants.JsonFilePath}/packageWindows.json`;
        break;
    }

    console.log(this.Url);

    const data = this.service.getdata(this.Url);
    return data;

  }
  
}
