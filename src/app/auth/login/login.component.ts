import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../partials/navbar/navbar.component'
@Component({
  providers:[NavbarComponent ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authservice: AuthService, public router: Router, private comp: NavbarComponent) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe(
      (result) => {
       this.authservice.setToken(result['_body']);
       this.comp.ngOnInit();
       this.router.navigate(['secure']);
      },
      (err) => {
          console.log(err);
      }
    );
  }
}
