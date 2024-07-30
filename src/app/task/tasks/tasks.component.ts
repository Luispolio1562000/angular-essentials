import { Component, EventEmitter, Input, Output } from '@angular/core';



interface Task {

  id: string
  title: string
summary: string
dueDate: string
 
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})





export class TasksComponent {

  @Input({required:true}) task?: Task;
  @Output() completed = new EventEmitter <string>;



  onTaskCompleted(){
    this.completed.emit(this.task?.id)
  }

}
