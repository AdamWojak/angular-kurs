import {Component, OnInit} from "@angular/core";
import {ClickService} from "../services/click.service";

@Component({
  selector: 'app-click1',
  templateUrl: './click1.component.html',
  styleUrls: ['./click1.component.css']
})
export class Click1Component implements OnInit {

  click1Amount = 0;

  constructor(private clickService: ClickService) {
  }

  ngOnInit() {
  }

  add() {
    this.click1Amount += 1;
    this.clickService.addClicks();
  }
}
