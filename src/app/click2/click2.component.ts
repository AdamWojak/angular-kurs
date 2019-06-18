import {Component, OnInit} from "@angular/core";
import {ClickService} from "../services/click.service";

@Component({
  selector: 'app-click2',
  templateUrl: './click2.component.html',
  styleUrls: ['./click2.component.css']
})
export class Click2Component implements OnInit {

  click2Amount = 0;

  constructor(private clickService: ClickService) {
  }

  ngOnInit() {
  }

  add() {
    this.click2Amount += 1;
    this.clickService.addClicks();
  }
}
