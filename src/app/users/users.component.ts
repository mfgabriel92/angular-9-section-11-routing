import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [
    new User(1, 'Gabriel'),
    new User(2, 'Jeryanne'),
    new User(3, 'Yuki')
  ];

  constructor() {}

  ngOnInit(): void {}
}
