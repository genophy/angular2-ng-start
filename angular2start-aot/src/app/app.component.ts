import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.less'],

  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'app works!';

  ngOnInit(): void {
  }



}
