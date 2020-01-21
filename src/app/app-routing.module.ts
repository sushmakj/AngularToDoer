import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'todos/:username',
    component: ListTodosComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todoform',
    component: TodoFormComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    // This should always remain at the end of the list.
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
