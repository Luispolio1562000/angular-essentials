import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
} from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
 */

  @Input({ required: true }) id!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  @Output() select = new EventEmitter();
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });
  onSelectedUser() {
    this.select.emit(this.id);
  }
}

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
