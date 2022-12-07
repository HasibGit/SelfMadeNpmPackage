import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HavatarModule } from 'havatar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HavatarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
