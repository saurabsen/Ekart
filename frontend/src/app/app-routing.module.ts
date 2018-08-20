import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'social',
    component: DemoComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'order',
    component: OrderConfirmedComponent,
  },
  // { path: 'user',
  //   component: UserComponent,
  //   resolve: { data: UserResolver}
  // }
  {
    path: 'addproduct',
    component: AddproductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent
  },
  {
    path: 'adminportal',
    component: AdminPortalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
