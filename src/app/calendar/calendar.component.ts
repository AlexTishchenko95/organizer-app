import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../share/date.service';

interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

interface Week {
  days: Day[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Week[];

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.initCalendarTable();
  }

  initCalendarTable() {
    this.dateService.date.subscribe((dataValue: moment.Moment) => {
      const firstDay = dataValue.clone().startOf('month').startOf('week');
      const lastDay = dataValue.clone().endOf('month').endOf('week');
      const date = firstDay.clone().subtract(1, 'day');
      const calendar = [];

      while (date.isBefore(lastDay, 'day')) {
        calendar.push({
          days: Array(7)
            .fill(0)
            .map(() => {
              const value = date.add(1, 'day').clone();
              const active = moment().isSame(value, 'date');
              const disabled = !dataValue.isSame(value, 'month');
              const selected = dataValue.isSame(value, 'date');

              return { value, active, disabled, selected }
            })
        })
      }
      this.calendar = calendar;
    });
  }

  changeSelectedDate(day: moment.Moment) {
    this.dateService.changeDay(day);
  }

}
