import {Component, OnInit} from "@angular/core";
import {ClickService} from "./services/click.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-kurs';
  allClicks = 0;

  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  constructor(private clickService: ClickService) {

  }

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks
    })
  }

  add(task: string) {
    this.taskList.push(task);
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
    console.log(this.taskList)
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    console.log(this.taskDone)
  }


}
