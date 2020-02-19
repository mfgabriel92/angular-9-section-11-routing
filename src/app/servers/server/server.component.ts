import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serverService: ServersService) {}

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
  }
}
