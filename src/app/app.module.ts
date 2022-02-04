import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForModule } from '@rx-angular/template/experimental/for/template-experimental-for';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ForModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
