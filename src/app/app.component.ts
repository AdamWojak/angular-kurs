import {Component, OnInit} from "@angular/core";
import {ClickService} from "./services/click.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-kurs';
  allClicks = 0;

  constructor(private clickService: ClickService) {

  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks
    })
  }



}
