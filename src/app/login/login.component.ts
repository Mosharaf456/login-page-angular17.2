import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatCardModule} from '@angular/material/card';
// import { AuthenticationService } from '../../service/authentication.service'


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule, MatButtonModule, MatCheckboxModule, FormsModule, MatCardModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  error: string = ''
  // returnUrl: string
  // loginForm: FormGroup

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // this.authenticationService.logout()
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    // this.loginForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null, [Validators.required])
    // })
  }

  // onSubmit() {
  //   console.dir(this.loginForm)
  //   console.dir(this.loginForm.value)

  //   if (this.loginForm.invalid) {
  //     return
  //   }

  //   this.authenticationService.login(this.loginForm.value["username"], this.loginForm.value["password"])
  //     .pipe(first())
  //     .subscribe(
  //       () => this.router.navigate([this.returnUrl]),
  //       () => this.error = "invalid user/password"
  //     )
  // }
}