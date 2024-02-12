import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@NgModule({
  declarations: [AppComponent, DropdownComponent],
  imports: [BrowserModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
