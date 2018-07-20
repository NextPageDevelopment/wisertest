import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
    this.authservice.deleteToken();
    this.router.navigate(['auth/login']);
  }

}
