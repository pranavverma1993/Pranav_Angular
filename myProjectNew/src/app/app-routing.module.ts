import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthService } from './Shared/Auth/auth.service';
import { AuthGuard } from './Shared/Auth/auth.guard';

const routes: Routes = [ 
  {path : '',redirectTo: '/login',pathMatch: 'full'},
  {path : 'first',component : FirstComponent,canActivate: [AuthGuard]},
  {path : 'second',component : SecondComponent,canActivate: [AuthGuard]},
  {path : 'login',component : LoginComponent},
  {path : 'fetch',component : FetchDataComponent,canActivate: [AuthGuard]},
  { path: 'sharedM', loadChildren: () => import('./shared-m/shared-m.module').then(m => m.SharedMModule),canActivate: [AuthGuard] },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
