import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserI } from 'src/app/core/services/user/models/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  public user?: UserI;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.getUserById(id);
    }
  }

  private getUserById(id: string){
    this.userService.getUserById(id).subscribe((user: UserI) => {
      this.user = user;
    })
  }
  public navigateToEditUser(id: string) {
    this.router.navigate(['user-edit', id]);
  }
  public removeUser(id: string){
    this.userService.deleteUser(id).subscribe(() => {},
    (error) => { return error; }
  );
    this.router.navigate(['home']);
  }
}
