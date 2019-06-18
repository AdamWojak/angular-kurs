import {Injectable} from "@angular/core";
import {Subject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<>();

  constructor() {
  }

  addClicks() {
    this.sumClicks += 1;
    this.sum.next(this.sumClicks);
    console.log('Suma w serwisie: ' + this.sumClicks);
  }

  getSum(): Observable<> {
    return this.sum.asObservable();
  }

}
