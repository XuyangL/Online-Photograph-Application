import { AdvanceAccountComponent } from './advance-account/advance-account.component';
import { LoginguardService } from './service/loginguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OperateComponent } from './operate/operate.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AIDetectComponent } from './aidetect/aidetect.component';
import { AdvanceOperateComponent } from './advance-operate/advance-operate.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/:id', component: AdminComponent, canActivate: [LoginguardService] },
  { path: 'aidetect/:id', component: AIDetectComponent, canActivate: [LoginguardService] },
  { path: 'advanceOperate/:id', component: AdvanceOperateComponent, canActivate: [LoginguardService] },
  { path: 'operate/:id', component: OperateComponent, canActivate: [LoginguardService] },
  { path: 'account/:id', component: AccountComponent, canActivate: [LoginguardService] },
  { path: 'advanceAccount/:id', component: AdvanceAccountComponent, canActivate: [LoginguardService] },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
