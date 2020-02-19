import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    const { id } = this.route.snapshot.params;
    this.server = this.serverService.getServer(+id);

    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params.id);
    });
  }

  onEditClick() {
    this.router.navigate(['edit']);
  }
}
