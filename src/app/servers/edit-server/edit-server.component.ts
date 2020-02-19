import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName = '';
  serverStatus = '';

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServerStatus(): void {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
