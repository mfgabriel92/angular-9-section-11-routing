import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params.id,
      name: 'Gabriel'
    };

    this.route.params.subscribe((params: Params) => {
      this.user.id = params.id;
      this.user.name = 'Gabriel';
    });
  }
}
