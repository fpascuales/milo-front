import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/core/services/user/models/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users?: UserI[];

  constructor(
    private userService: UserService
  ){}

  public ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.userService.getUsers().subscribe((users: UserI[]) => {
      this.users = users;
    })
  }
}
