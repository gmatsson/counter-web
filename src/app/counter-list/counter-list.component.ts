import {Component, Input, OnInit} from '@angular/core';
import {Counter} from "../model/counter.model";
import {CounterService} from "../service/counter.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  @Input()
  counters;
  @Input()
  selected;
  @Input()
  selectFunction;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
  }

  isActive(counter: Counter) {
    return this.selected === counter;
  }

  deleteCounter(){
    this.counterService.deleteCounter(this.selected.id);
  }

}
