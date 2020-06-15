import {Injectable, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class DateService {
  private _date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  get date(): BehaviorSubject<moment.Moment> {
    return this._date;
  }

  @Input() set date(currentDate: BehaviorSubject<moment.Moment>) {
    this._date.next(currentDate.value);
  }

  changeMonth(value: number) {
    const newDate = this.date.value.add(value, 'month');
    this.date.next(newDate);
  }

  changeDay(day: moment.Moment) {
    const value = this.date.value.set({
      date: day.date(),
      month: day.month()
    });
    this.date.next(value);
  }
}
