export class AuthService {
  isLogged = false;

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged);
      }, 1000);
    });
  }

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
