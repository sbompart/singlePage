import { Component, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'Home Example';
    @ViewChild(AboutComponent) childView: AboutComponent;
}
