import { Component } from '@angular/core';
import { ChartOptions } from 'pure-angular-charts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  showSideBar = false;

}
