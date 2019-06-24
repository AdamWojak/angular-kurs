import {Component, OnInit} from "@angular/core";
import {TaskService} from "../services/task.service";


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {

  taskList = [];


  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe(task => {
      this.taskList = task
    });
  }


  remove(task: string) {
    this.taskService.remove(task);
  }

  add(task: string) {
    this.taskService.done(task);
  }


}
