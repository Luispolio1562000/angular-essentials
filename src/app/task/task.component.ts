import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { type NewTaskModel } from './task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    console.log(this.issAddingTask);
  }
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onaddTask() {
    this.issAddingTask = true;
  }
  onCloseDialog() {
    this.issAddingTask = false;
  }
  onAddTask(taskData: NewTaskModel) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
    });
    this.issAddingTask = false;
  }
}
