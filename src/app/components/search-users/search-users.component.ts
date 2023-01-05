import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SearchUserService } from './search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
})
export class SearchUsersComponent {
  users: User[] = [];
  searchString!: string;
  searchResult: User[] = [];
  isUserCreated = false;

  constructor(public searchUserService: SearchUserService) {}

  ngOnInit() {
    this.getUsers()
    
  }
  getUsers(){
    this.users = this.searchUserService.getUsers();
    console.log('users: ', this.users)
  }

  searchUser(users: User[]) {
    this.searchResult = this.users.filter(
      (result) =>
        result.email.includes(this.searchString) ||
        result.username.includes(this.searchString)
    );
    setTimeout(() => {
      this.delayClearInput();
    }, 2000);
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
