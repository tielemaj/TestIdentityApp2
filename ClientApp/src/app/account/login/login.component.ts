import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeFirm();
  }

  initializeFirm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          // this.router.navigateByUrl('/account/login');
        },
        error: error => {
          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      })
    }
  }
}
