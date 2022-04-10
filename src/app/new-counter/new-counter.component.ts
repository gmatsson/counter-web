import {Component, Input, OnInit} from '@angular/core';
import {Counter} from "../model/counter.model";
import {CounterService} from "../service/counter.service";

@Component({
  selector: 'app-new-counter',
  templateUrl: './new-counter.component.html',
  styleUrls: ['./new-counter.component.css']
})
export class NewCounterComponent implements OnInit {
  counterName: string = '';
  @Input()
  updateCountersFunction;
  @Input()
  selectFunction;
  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
  }

  addNewCounter(): void{
    this.counterService.addCounter(this.counterName).subscribe(() => {
      this.updateCountersFunction();
    });
    this.counterName = '';
  }

}
