import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewCounterComponent } from './new-counter/new-counter.component';
import {CounterService} from "./service/counter.service";
import {HttpClientModule} from "@angular/common/http";
import { CounterListComponent } from './counter-list/counter-list.component';
import { ActiveCounterComponent } from './active-counter/active-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCounterComponent,
    CounterListComponent,
    ActiveCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
