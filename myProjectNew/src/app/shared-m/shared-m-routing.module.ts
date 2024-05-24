import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedMComponent } from './shared-m.component';
import { ButtonComponent } from './button/button.component';
import { PranavComponent } from './pranav/pranav.component';

const routes: Routes = [{ path: '', component: SharedMComponent },
{path : 'button',component : ButtonComponent},
{path : 'pranav',component : PranavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedMRoutingModule { }
