import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {}
}
