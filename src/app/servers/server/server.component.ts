import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  onEditClick() {
    this.router.navigate(['edit']);
  }
}
