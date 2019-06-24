import {Component, OnInit} from "@angular/core";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  taskDone: Array<string> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTaskDoneObs().subscribe(task => {
      this.taskDone = task
    });
  }

  ngOnInit() {
  }

}
