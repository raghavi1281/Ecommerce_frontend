import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

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
                                  CartComponent
                                ]
