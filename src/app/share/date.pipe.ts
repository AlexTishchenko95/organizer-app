import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(m: moment.Moment, format: string = 'MMMM Do YYYY'): any {
    if (!m && !format) { return; }
      return m.format(format);
  }
}
