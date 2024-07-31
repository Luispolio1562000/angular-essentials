import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';
import{type User} from './user.model'
import { CardComponent } from '../shared/card/card.component';
/* type User = {
   
  id: string,
  avatar: string,
  name: string,
} */



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  

  @Input({required:true}) user!: User;
  
@Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });
  
  onSelectedUser() {
    this.select.emit(this.user.id);
    
  }

}






















/* @Input({ required: true }) id!: string;

  avatar = input.required<string>();
  name = input.required<string>(); */


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


/* @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
 */
//select = output<string>();


// selectedUser = signal(DUMMY_USERS[randomIndex]);

/* imagePath = computed(() => {
     return 'assets/users/' + this.selectedUser().avatar;
  });
 */
/* get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  } */
/* onSelecteUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log(this.selectedUser());
    
  } */
