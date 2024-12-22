import { Component, OnInit } from '@angular/core';
import { MainmenuService } from '../../services/mainmenu.service';
import { GlobalConstants } from '../../common/global-constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mainMenu } from '../../models/mainMenu';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent implements OnInit {

  mainmenu: mainMenu[] = [];
  length: number = 0;

  constructor(private service: MainmenuService, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe(data => {
        this.mainmenu = data;
        GlobalConstants.mainMenuData = data;
        this.length = this.mainmenu.length;
      });
  }

  setKey(id: number): void {
    GlobalConstants.currentcategory = 0;
    GlobalConstants.currentOperatingS = id;
    this.comService.triggerReload();
  }

}
