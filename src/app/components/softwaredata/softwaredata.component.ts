import { Component, OnDestroy, OnInit } from '@angular/core';
import { SoftwaredataService } from '../../services/softwaredata.service';
import { GlobalConstants } from '../../common/global-constants';
import { SoftwareData, SoftwareDataView } from '../../models/SoftwareData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-softwaredata',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './softwaredata.component.html',
  styleUrl: './softwaredata.component.css'
})
export class SoftwaredataComponent implements OnInit, OnDestroy {

  private reloadSubscription: Subscription = new Subscription();;

  softwaredata: SoftwareData[] = [];
  softwareDataView: SoftwareDataView[] = [];
  length: number = 0;

  constructor(private service: SoftwaredataService, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.reloadSubscription = this.comService
      .reloadComponent$
      .subscribe(() => {
        this.Reload();
      });
      this.Reload();
  }

  ngOnDestroy(): void {
    if (this.reloadSubscription) {
      this.reloadSubscription.unsubscribe(); // Prevent memory leaks
    }
  }

  Reload() {
    this.service.getData()
      .subscribe(data => {
        this.softwaredata = data;
        GlobalConstants.softwareData = data;
        this.length = this.softwaredata.length;
        console.log('Len ', this.length);
        if (this.length > 0) {
          console.log('current category', GlobalConstants.currentcategory);
          if (GlobalConstants.currentcategory === 0) {
            this.softwareDataView = this.softwaredata
              .map(x => {
                let ydata = GlobalConstants.mainMenuData.find(y => y.id == x.os);
                let ccat = GlobalConstants.categoryData.find(z => z.id == x.category);
                return {
                  id: x.id,
                  isactive: x.isactive,
                  os: ydata ? ydata.name : 'XOS',
                  category: ccat ? ccat.name : 'ALL',
                  name: x.name,
                  imgsrc: x.imgsrc,
                  summary: x.summary,
                  weblink: x.weblink,
                  downloadlink: x.downloadlink,
                  details: x.details,
                  counting: x.counting
                }
              });
          }
          else {
            this.softwareDataView = this.softwaredata
              .filter(c => c.category == GlobalConstants.currentcategory)
              .map(x => {
                let ydata = GlobalConstants.mainMenuData.find(y => y.id == x.os);
                let ccat = GlobalConstants.categoryData.find(z => z.id == x.category);
                return {
                  id: x.id,
                  isactive: x.isactive,
                  os: ydata ? ydata.name : 'XOS',
                  category: ccat ? ccat.name : 'ALL',
                  name: x.name,
                  imgsrc: x.imgsrc,
                  summary: x.summary,
                  weblink: x.weblink,
                  downloadlink: x.downloadlink,
                  details: x.details,
                  counting: x.counting
                }
              });
          }
          if (this.softwareDataView.length > 0) {
            GlobalConstants.softwareDataView = this.softwareDataView
          }
        }
      });
  }
}
