import { Component } from '@angular/core';
import { HeaderLink } from './model/header.model';
import { headerLinks } from './config/header.config';
import { ChildActivationEnd, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isLogged: boolean = false;
  public headerLinksElements: HeaderLink[] = headerLinks;
  public currentUrl: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof ChildActivationEnd && event.snapshot.url?.length > 0) {
        this.currentUrl = event.snapshot.url[0].path;
      }
    });
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    })
  }
  
  public logout() {
    this.authService.logout();
  }
}
