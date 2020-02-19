import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName: string;
  serverStatus: string;

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribeToParams();
    this.subscribeToQueryParams();
  }

  onUpdateServerStatus(): void {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }

  private subscribeToParams() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.server = this.serverService.getServer(params.id);
    });
  }

  private subscribeToQueryParams() {
    this.route.queryParams.subscribe();
  }
}
