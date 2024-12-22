import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { GenerichttpclientService } from './generichttpclient.service';
import { category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  Url: string = `${GlobalConstants.JsonFilePath}softwareCategory.json`;

  constructor(private service: GenerichttpclientService<category>) { }

  getData = (): Observable<category[]> =>  this.service.getdata(this.Url);
}
