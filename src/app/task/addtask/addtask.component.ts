import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskModel } from '../task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskModel>();
  enteredTitle = '';
  enteredSummary= '';
  enteredDate = '';

  onClose() {
    this.cancel.emit();
  }
  onSubmit(){
  
    this.addTask.emit({
     title:  this.enteredTitle,
     summary: this.enteredSummary,
     date: this.enteredDate,

    })
    
  }
}
