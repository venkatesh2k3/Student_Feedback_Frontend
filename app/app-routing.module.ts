import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
// import { NextPageComponent } from './next-page/next-page.component';

const routes: Routes = [
  {
    path: '',component: WelcomepageComponent,
  },
  {
    path: 'reg',
    component: RegisterationComponent,
  },
  {
    path: 'log',
    component: LoginformComponent,
  },
  {
    path: 'feedb',
    component: FeedbackformComponent,
  },
  {
    path: 'main/:rollNumber',
    component: MainpageComponent,
  },
  {
    path: 'reset',
    component: ResetpasswordComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
