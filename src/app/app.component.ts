import { Component } from '@angular/core';
import { HeadeComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TaskComponent } from "./task/task.component";
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadeComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)
  }


  onSelectUser(id:string){
    this.selectedUserId = id;


  }

  
}
