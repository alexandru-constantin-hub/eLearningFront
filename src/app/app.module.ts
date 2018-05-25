import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component'; 
import { DepartmentService } from './department/department.service';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationService } from './authorization/authorization.service';
import { TokenInterceptorService } from './authorization/token-interceptor.service';
import { StudentPreExamObligationComponent } from './student-pre-exam-obligation/student-pre-exam-obligation.component';
import { ProfessorPreExamObligationComponent } from './professor-pre-exam-obligation/professor-pre-exam-obligation.component';
import { ProfessorPreExamObligationRecordsComponent } from './professor-pre-exam-obligation-records/professor-pre-exam-obligation-records.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  }, */
  {
    path: 'login',
    component: AuthorizationComponent
  },
  {
    path: 'users',
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthorizationComponent,
    DepartmentComponent,
    StudentPreExamObligationComponent,
    ProfessorPreExamObligationComponent,
    ProfessorPreExamObligationRecordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, DepartmentService, AuthorizationService, TokenInterceptorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
