import { Injectable, EventEmitter, Input, Output, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
// import { NavbarComponent } from '../../partials/navbar/navbar.component'


@Injectable()
export class AuthGuardService implements CanActivate {
  // @Output() voted = new EventEmitter<boolean>();
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    // this.voted.emit(true);

    this.auth.test = true;
    return true;
  }
}
