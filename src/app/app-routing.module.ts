import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'home', component:HomeComponent,
  children: [

    {
        path: 'product',
        component: ProductComponent
    },
    {
      path: 'details/:id',
      component: DetailsComponent
    },
    {
      path: 'cart',
      component: CartComponent
    }
    ]
  },
  {
    path: "admin", component:AdminComponent,
    children: [

      {
          path: 'Products',
          component: ViewProductsComponent
      },
      {
        path:'editDetails',
        component: EditDetailsComponent
      },
      {
        path:'newProduct',
        component: NewProductComponent
      },
      {
        path:'details/:id',
        component: ProductDetailsComponent
      }
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, 
                                  ProductComponent, 
                                  LoginComponent,
                                  DetailsComponent,
                                  CartComponent,
                                  AdminComponent,
                                  ViewProductsComponent,
                                  EditDetailsComponent,
                                  NewProductComponent
                                ]
