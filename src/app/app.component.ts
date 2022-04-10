import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "./service/counter.service";
import {Counter} from "./model/counter.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'counter-web';
  counters;
  selected;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.refreshCounters()
  }

  refreshCounters(): void {
    this.counters = this.counterService.getCounters();
  }

  select(counter: Counter) {
    if (this.selected !== undefined)
      this.counterService.updateCounter(this.selected).subscribe();
    this.selected = counter;
  }

  selectFunction = ((counter: Counter) => this.select(counter));
  refreshCountersFunction = (() => this.refreshCounters());

  saveData() {
   this.counterService.updateCounter(this.selected).subscribe(res => console.log(res + ' saved'));
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    await this.saveData();
  }

}

