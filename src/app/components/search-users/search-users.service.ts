import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class SearchUserService {
  constructor(public http: HttpClient){}
  
  private users: User[] = []
  // [
  //   {
  //     id: 1237,
  //     username: 'tonyTiger',
  //     password: '123yn',
  //     email: 'tonytiger@gmail.com',
  //     age: 14,
  //   },
  //   {
  //     id: 1232,
  //     username: 'bugsbunny',
  //     password: '123yu',
  //     email: 'bugsy@gmail.com',
  //     age: 19,
  //   },
  //   {
  //     id: 1244,
  //     username: 'terry',
  //     password: '123',
  //     email: 'terry@gmail.com',
  //     age: 12,
  //   },
  //   {
  //     id: 1143,
  //     username: 'terrier',
  //     password: '123',
  //     email: 'terrier@gmail.com',
  //     age: 15,
  //   },
  // ];

  getUsers() {
    this.http.get<{message: string, users: User[]}>('http://localhost:3000/api/users').subscribe((userData) => {
      console.log('userData: ', userData);
      this.users = userData.users;
    })
    // return [...this.users];
  }
  addUser(userObj: User) {
    const user: User = userObj;
  }
}
