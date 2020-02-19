import { Server } from './server.model';

export class ServersService {
  private servers: Server[] = [
    new Server(1, 'Prod. Server', 'online'),
    new Server(2, 'Test. Server', 'offline'),
    new Server(3, 'Dev. Server', 'updating')
  ];

  getServers(): Server[] {
    return this.servers;
  }

  getServer(id: number): Server {
    const server = this.servers.find(s => {
      return s.id === id;
    });

    return server;
  }

  updateServer(id: number, serverInfo: { name: string; status: string }): void {
    const server = this.servers.find(s => {
      return s.id === id;
    });

    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
