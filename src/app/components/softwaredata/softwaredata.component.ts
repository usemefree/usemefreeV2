import { Component, OnInit } from '@angular/core';
import { SoftwaredataService } from '../../services/softwaredata.service';
import { GlobalConstants } from '../../common/global-constants';
import { SoftwareData } from '../../models/SoftwareData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-softwaredata',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './softwaredata.component.html',
  styleUrl: './softwaredata.component.css'
})
export class SoftwaredataComponent implements OnInit {

  softwaredata: SoftwareData[] = [];
  length: number = 0;

  constructor(private service: SoftwaredataService) { }

  ngOnInit(): void {

    this.service.getData()
      .subscribe(data => {
        this.softwaredata = data;
        GlobalConstants.softwareData = data;
        this.length=this.softwaredata.length;
      });
  }
}
