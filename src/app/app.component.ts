import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = [{x: 50, y: 60, value: 5}, {x: 10, y: 70, value: 2}];
}
