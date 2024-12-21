import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from "./components/mainmenu/mainmenu.component";
import { CategoryComponent } from './components/category/category.component';
import { SoftwaredataComponent } from './components/softwaredata/softwaredata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    MainmenuComponent,
    CategoryComponent,
    SoftwaredataComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usemefreeV2';
}
