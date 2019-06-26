import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = {
    auth: false,
    username: ''
  };
  public isAuth() {
    return this.user.auth;
  }
  public getUsername() {
    return this.user.username;
  }
  public login(username: string) {
    this.user.auth = true;
    this.user.username = username;
  }
  public logout() {
    this.user.auth = false;
    this.user.username = '';
  }
  constructor() { }
}
