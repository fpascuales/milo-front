import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI, UserRequestI } from '../models/user.interface';

const API_URL = 'http://localhost:8000/users'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private http: HttpClient
  ) { }

  public signupApiUser(body: UserRequestI): Observable<UserI> {
    return this.http.post<UserI>(`${API_URL}`, body);
  }
  public getApiUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(`${API_URL}`);
  }
  public getApiUserById(id: string): Observable<UserI> {
    return this.http.get<UserI>(`${API_URL}/${id}`);
  }
  public updateApiUser(body: UserI, id: string): Observable<UserI> {
    return this.http.put<UserI>(`${API_URL}/${id}`, body);
  }
  public deleteApiUser(id: string): Observable<UserI> {
    return this.http.delete<UserI>(`${API_URL}/${id}`);
  }
}
