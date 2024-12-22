import { Injectable } from '@angular/core';
import { GenerichttpclientService } from './generichttpclient.service';
import { mainMenu } from '../models/mainMenu';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class MainmenuService {

  Url: string = `${GlobalConstants.JsonFilePath}operatingSystems.json`;

  constructor(private service: GenerichttpclientService<mainMenu>) { }

  getData = (): Observable<mainMenu[]> => this.service.getdata(this.Url);
  
}
