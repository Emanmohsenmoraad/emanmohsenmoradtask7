import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task6Component } from './task6/task6.component';
import { FormsModule } from '@angular/forms';
import { FirstsiblingComponent } from './firstsibling/firstsibling.component';
import { SecondsiblingComponent } from './secondsibling/secondsibling.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    Task6Component,
    FirstsiblingComponent,
    SecondsiblingComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     YouTubePlayerModule,
     CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
