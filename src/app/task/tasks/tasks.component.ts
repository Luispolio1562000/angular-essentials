import { Component,Input, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../task.service';


interface Task {

  id: string
  title: string
summary: string
dueDate: string
 
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})





export class TasksComponent {

  @Input({required:true}) task!: Task;
private tasksService = inject(TasksService)


  onTaskCompleted(){
    console.log(this.task);
    return this.tasksService.removeTask(this.task.id)
    
  }

}
