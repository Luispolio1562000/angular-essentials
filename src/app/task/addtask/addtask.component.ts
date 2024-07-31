import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskModel } from '../task.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {

  @Input({required:true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary= '';
  enteredDate = '';

  private tasksService = inject(TasksService)
  onClose() {
    this.close.emit();
  }
  onSubmit(){
  
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredDate,
    }, this.userId)
    this.close.emit();
  }
}
