import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusModule } from 'http-status-pipe';
import { HttpModule } from '@angular/http';
// import { AuthService } from 'stub';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SecureComponent } from './pages/secure/secure.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'auth',
      loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
      path: 'secure',
      component: SecureComponent,
      canActivate: [AuthGuardService],
    },
    {
        path: 'error/:status_code',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent,
        SecureComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        HttpStatusModule
    ],
    providers: [
        AuthService, AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
