import { Component } from '@angular/core';
import { DateService } from '../share/date.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent {
  constructor(public dateService: DateService) {}

  redirectHandler(value: number): void {
    this.dateService.changeMonth(value);
  }

}
