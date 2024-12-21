import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { GlobalConstants } from '../../common/global-constants';
import { category } from '../../models/category';

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

  constructor(private service: CategoryService) { }

  ngOnInit(): void {

    this.service.getData()
      .subscribe(data => {
        this.cate = data;
        GlobalConstants.categoryData = data;
        this.length = this.cate.length;
      });
  }

}
