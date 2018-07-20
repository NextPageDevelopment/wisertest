import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../app/shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, LogoutComponent],
  providers: [
      AuthService
  ]
})
export class AuthModule { }
