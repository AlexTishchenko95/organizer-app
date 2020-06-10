import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import {DatePipe} from './share/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DateSelectorComponent,
    DatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
