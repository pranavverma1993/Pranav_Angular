import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMRoutingModule } from './shared-m-routing.module';
import { SharedMComponent } from './shared-m.component';
import { ButtonComponent } from './button/button.component';
import { PranavComponent } from './pranav/pranav.component';
import { PranavPipe } from './pranav.pipe';


@NgModule({
  declarations: [
    SharedMComponent,
    ButtonComponent,
    PranavComponent,
    PranavPipe
  ],
  imports: [
    CommonModule,
    SharedMRoutingModule
  ],
  exports:[ButtonComponent,PranavPipe]
})
export class SharedMModule { }
