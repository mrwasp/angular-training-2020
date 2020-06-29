import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyToggleComponent } from '../my-toggle/my-toggle.component';
import { StyledTextComponent } from '../styled-text/styled-text.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyToggleComponent, StyledTextComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
