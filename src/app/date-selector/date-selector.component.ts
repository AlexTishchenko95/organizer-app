import { Component } from '@angular/core';
import { DateService } from '../share/date.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent {
  constructor(public dateService: DateService) {}

  onGo(value: number) {
    this.dateService.changeMonth(value);
  }

}
