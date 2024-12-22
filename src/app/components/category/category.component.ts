import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { GlobalConstants } from '../../common/global-constants';
import { category } from '../../models/category';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  cate: category[] = [];
  length: number = 0;

  constructor(private service: CategoryService, private comService: CommunicationService) { }

  ngOnInit(): void {

    this.service.getData()
      .subscribe(data => {
        this.cate = data;
        GlobalConstants.categoryData = data;
        this.length = this.cate.length;
      });
  }

  setKey(id: number): void {
    GlobalConstants.currentcategory = id;
    this.comService.triggerReload();
  }

}
