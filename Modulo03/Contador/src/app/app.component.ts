import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appValor = 10;

  eventListener(event:number):void {
    this.appValor = event;
  }
}
