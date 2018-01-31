import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonSharedModule } from './CommonShared/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
