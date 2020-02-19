import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.server = this.serverService.getServer(+id);
  }
}
