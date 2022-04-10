import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Counter} from "../model/counter.model";

@Injectable()
export class CounterService {

  private API_URL = 'http://localhost:8080/api/v1'
  activeCounter;
  counters;

  constructor(private http: HttpClient) {
  }

  getCounters(): Observable<Counter> {
    return this.http.get<Counter>(this.API_URL + '/counters').pipe(map(res =>{
      return res;
    } ));
  }

  updateCounter(counter: Counter): Observable<Counter> {
    return this.http.put<Counter>(this.API_URL + '/updateCounter', counter);
  }

  addCounter(counterName: string): Observable<Counter> {
    const newCounter = {
      name: counterName,
      count: 0
    }
    return this.http.post<Counter>(this.API_URL + '/addCounter', newCounter)
  }

  deleteCounter(id: string): void {
    this.http.delete<Counter>(this.API_URL + '/deleteCounter/'+ id).subscribe();
  }

}
