import { Injectable } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { User } from 'src/app/models/user.model';

let searchedUsers = [
  {
    id: 1237,
    username: 'tonyTiger',
    password: '123',
    email: 'tonytiger@gmail.com',
    phoneNumber: '3456788998',
    age: 14,
  },
  {
    id: 1232,
    username: 'bugsbunny',
    password: '123',
    email: 'bugsy@gmail.com',
    phoneNumber: '3486777998',
    age: 12,
  },
];

@Injectable({ providedIn: 'root' })
export class SearchUserService {
  users: User[] = [
    {
      id: 1237,
      username: 'tonyTiger',
      password: '123yn',
      email: 'tonytiger@gmail.com',
      age: 14,
    },
    {
      id: 1232,
      username: 'bugsbunny',
      password: '123yu',
      email: 'bugsy@gmail.com',
      age: 19,
    },
    {
      id: 1244,
      username: 'terry',
      password: '123',
      email: 'terry@gmail.com',
      age: 12,
    },
    {
      id: 1143,
      username: 'terrier',
      password: '123',
      email: 'terrier@gmail.com',
      age: 15,
    },
  ];

  getUsers() {
    return [...this.users];
  }
  addUser(userObj: User) {
    const user: User = userObj;
  }
}
