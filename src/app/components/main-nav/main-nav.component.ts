import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  toggle = false;
  toggleMe() {
    console.log('clickedMe: ');
    this.toggle = !this.toggle
  }
}
