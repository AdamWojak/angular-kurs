import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AddTaskComponent } from './add-task/add-task.component';
import { Click1Component } from './click1/click1.component';
import { Click2Component } from './click2/click2.component';
import {ClickService} from "./services/click.service";

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    Click1Component,
    Click2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
