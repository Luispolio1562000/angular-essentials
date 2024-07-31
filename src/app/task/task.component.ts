import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { type NewTaskModel } from './task.model';
import { TasksService } from './task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, AddtaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() userName!: string;
  @Input({ required: true }) userId!: string;
  issAddingTask: boolean = false;

  constructor( private tasksService: TasksService ){  }
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onaddTask() {
    this.issAddingTask = true;
  }
  onCloseDialog() {
    this.issAddingTask = false;
  }
}
