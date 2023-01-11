import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SearchUserService } from './search-users.service';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
})
export class SearchUsersComponent {
  users: User[] = [];
  foundUsers = new Subject<User>()
  searchString!: string;
  searchResult: User[] = [];
  isUserCreated = false;

  constructor(public userService: SearchUserService) {}

  ngOnInit() {
    this.getAllUsers() 
  }

  getAllUsers() {
    this.userService.getUsers()
    // this.userService.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
  }

  searchUser(users: User[]) {
  
    this.searchResult = this.users.filter(
      (result) =>
        result.email.includes(this.searchString) ||
        result.username.includes(this.searchString)
    );
    setTimeout(() => {
      this.delayClearInput();
    }, 1000);
    if(this.searchResult.length > 0){
      this.isUserCreated = true;
    }
    return this.searchResult;
  }
  delayClearInput() {
    if (this.searchString !== '') {
      this.searchString = '';
    }
  }
}
