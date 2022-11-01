import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    CartComponent,
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
