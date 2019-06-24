import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private taskList: Array<string> = [];
  private taskDone: Array<string> = [];

  private taskListObs = new BehaviorSubject(this.taskList);
  private taskDoneObs = new BehaviorSubject(this.taskList);

  constructor() {
    this.taskList = ['Porządki w domu', 'Nauka Angulara', 'Nauka Niemieckiego', 'Trening'];
    this.taskListObs.next(this.taskList);
  }

  add(task: string) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList)
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.taskDone)
  }

  getTaskListObs() {
    return this.taskListObs.asObservable();
  }
  getTaskDoneObs() {
    return this.taskDoneObs.asObservable();
  }
}
