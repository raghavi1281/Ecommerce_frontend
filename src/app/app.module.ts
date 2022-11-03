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
import { ViewProductsComponent } from './view-products/view-products.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    CartComponent,
    HeaderComponent,
    DetailsComponent,
    ViewProductsComponent,
    EditDetailsComponent,
    NewProductComponent,
    ProductDetailsComponent,
    SearchPageComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
