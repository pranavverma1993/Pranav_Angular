import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { FetchDataService } from './Shared/Services/fetch-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { SharedMModule } from './shared-m/shared-m.module';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FilterPipe } from './Shared/Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    FetchDataComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,SharedMModule 
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
