import { Component, OnInit, Input } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  @Input() nombreUser;

  users: Array<User> = [] ;
  activo:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addUser(inputUser) {
    let user: User = new User(inputUser.value);
    console.log(this.activo);
    user.activo = this.activo;
    this.users.push(user);
    inputUser.value = '';
    return false
  }

  click_check (e , id:number) {
    let indexUser: number = this.users.findIndex( user => user.id == id);
    if (e.target.checked) {
      this.users[indexUser].activo = true;  
      console.log("Click Check Si "+id.toString());
    } else {
      this.users[indexUser].activo = false;  
      console.log("Click Check No "+id.toString());
    }


  }

  listUser() {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i]);
    }
  }

  deleteUser(userId) {
    for (let i = 0; i < this.users.length; i++) {
      if (userId == this.users[i].id) {
        this.users.splice(i, 1);
      }
    }
  }

}
