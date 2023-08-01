import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { UserI } from './models/auth.model';

const AUTH_URL = 'http://localhost:8000/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLogged$: Observable<boolean> = this.isLoggedSubject$.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.isAuthenticated().subscribe((isAuthenticated) => {
      this.isLoggedSubject$.next(isAuthenticated);
    });
  }

  public login(user: UserI): Observable<any> {      
    return this.http.post<any>(`${AUTH_URL}/login`, user, { withCredentials: true }).pipe(
      tap((res) => {        
        if(res.success) {
          this.isLoggedSubject$.next(true);    
          this.router.navigate(['/home']);
        }
      })
    );
  }

  public isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${AUTH_URL}/is-authenticated`, { withCredentials: true });
  }

  public logout() {
    this.isLoggedSubject$.next(false);
    this.router.navigate(['/']);
  }
}