import { Injectable } from '@angular/core';
import { UserApiService } from './api/user-api.service';
import { Observable } from 'rxjs';
import { UserI, UserRequestI } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private userApiService: UserApiService
  ) { }

  public signupUser(body: UserRequestI): Observable<UserI> {
    return this.userApiService.signupApiUser(body);
  }
  public getUsers(): Observable<UserI[]> {
    return this.userApiService.getApiUsers();
  }
  public getUserById(id: string): Observable<UserI> {
    return this.userApiService.getApiUserById(id);
  }
  public updateUser(body: UserI, id: string): Observable<UserI> {
    return this.userApiService.updateApiUser(body, id);
  }
  public deleteUser(id: string): Observable<UserI> {
    return this.userApiService.deleteApiUser(id);
  }
}
