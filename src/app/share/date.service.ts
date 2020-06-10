import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  changeMonth(value: number) {
    const newDate = this.date.value.add(value, 'month');
    this.date.next(newDate);
  }

  changeDay(day: moment.Moment) {
    const value = this.date.value.set({
      date: day.date(),
      month: day.month()
    })
    this.date.next(value);
  }
}
