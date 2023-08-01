import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/core/services/user/models/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input() public user?: UserI;
  @Input() public isUpdateMode: boolean = false;

  public userForm?: FormGroup;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ){}

  public ngOnInit(): void {
    this.initForm();
  }

  public handleUser() {
    if(this.userForm?.valid){
      if(this.isUpdateMode) {
        this.updateUser();
      } else {
        this.signupUser();
      }
      this.userForm.reset();
    } else {
      this.hasFormError = true;
    }
  }

  public navigateToHome() {
    this.router.navigate(['home']);
  }

  private signupUser() {
    this.hasFormError = false;
    this.userService.signupUser(this.userForm?.value)
    .subscribe(() => {
      this.hasSuccess = true;
      this.router.navigate(['home']);
    });
  }
  
  private updateUser() {
    if(this.user){
      this.userService.updateUser(this.userForm?.value, this.user._id)
      .subscribe(() => {
        this.hasSuccess = true;
        this.router.navigate(['home']);
      });
    }
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      username: new FormControl(this.user?.username || '', [Validators.required]),
      name: new FormControl(this.user?.name || '', [Validators.required]),
      surnames: new FormControl(this.user?.surnames || '', [Validators.required]),
      email: new FormControl(this.user?.email || '', [Validators.required]),
      password: new FormControl(this.user?.password || '', [Validators.required]),
    })
  }
}
