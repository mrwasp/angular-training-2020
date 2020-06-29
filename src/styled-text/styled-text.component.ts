import { Component, OnInit } from '@angular/core';

// TODO 1: [ngClass]
// TODO 2: handle 'change' event

@Component({
  selector: 'nts-styled-text',
  templateUrl: './styled-text.component.html',
  styleUrls: ['./styled-text.component.css']
})
export class StyledTextComponent implements OnInit {

  exampleText = 'Lorem ipsum...';
  isBold = false;
  isUnderline = false;
  isItalic = false;

  changeBold() {
    this.isBold = !this.isBold;
  }

  changeItalic() {
    this.isItalic = !this.isItalic;
  }

  changeUnderline() {
    this.isUnderline = !this.isUnderline;
  }

  get cssClass() {
    return {
      'make-bold': this.isBold,
      'add-underline': this.isUnderline,
      'my-italic': this.isItalic
    };
  }

  ngOnInit() {
  }
}
