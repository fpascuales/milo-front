import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/core/services/user/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(
    private router: Router
  ){}

  @Input() public user?: UserI;

  public navigateToDetail(id: string){
    this.router.navigate(['user-detail', id]);
  }
}
