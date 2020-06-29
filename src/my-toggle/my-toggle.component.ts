import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  isShown = false;

  get caption(): string {
    return this.isShown ? 'Hide' : 'Show';
  }

  toggle() {
    this.isShown = !this.isShown;
  }

  ngOnInit() {
  }

}
