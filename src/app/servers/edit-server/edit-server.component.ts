import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../server.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, CanDeactivateGuardService {
  server: Server;
  @ViewChild('serverNameRef', { static: true }) serverName: ElementRef;
  @ViewChild('serverStatusRef', { static: true }) serverStatus: ElementRef;
  hasUnsavedChanged = true;

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.server = this.serverService.getServer(+id);

    this.subscribeToParams();
    this.subscribeToQueryParams();
  }

  onUpdateServerStatus(): void {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName.nativeElement.value,
      status: this.serverStatus.nativeElement.value
    });
    this.hasUnsavedChanged = false;
    this.router.navigate(['../', { relativeTo: this.router }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (
      this.serverName.nativeElement.value !== this.server.name ||
      this.serverStatus.nativeElement.value !== this.server.status ||
      this.hasUnsavedChanged === true
    ) {
      return confirm('Discard changes?');
    } else {
      return true;
    }
  }

  private subscribeToParams() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params.id);
    });
  }

  private subscribeToQueryParams() {
    this.route.queryParams.subscribe();
  }
}
