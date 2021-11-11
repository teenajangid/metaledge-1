import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { AddCategoryComponent } from './Admin/pages/category/add/add.component';
import { ViewCategoryComponent } from './Admin/pages/category/view/view.component';
import { DashboardComponent } from './Admin/pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Admin/pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Admin/pages/login/login.component';
import { AddProductComponent } from './Admin/pages/product/add/add.component';
import { ViewProductComponent } from './Admin/pages/product/view/view.component';
import { AuthGuard } from './guard/auth.guard';
import { Error404Component } from './shared/error404/error404.component';
import { HomeComponent } from './Website/pages/home/home.component';

const routes: Routes = [
  {
    path: 'admin',component: AdminComponent,
    children:[
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      // Category
      {
        path: 'add-category', component: AddCategoryComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-category/:id', component: AddCategoryComponent, canActivate: [AuthGuard]
      },
      {
        path: 'view-category', component: ViewCategoryComponent, canActivate: [AuthGuard]
      },
      {
        path: 'view-category/:id', component: ViewCategoryComponent, canActivate: [AuthGuard]
      },
      // Product

      {
        path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-product/:id', component: AddProductComponent, canActivate: [AuthGuard]
      },
      {
        path: 'view-product', component: ViewProductComponent, canActivate: [AuthGuard]
      },
      {
        path: '', redirectTo:'/admin/dashboard', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotpasswordComponent
  },
  {
    path: '',component: HomeComponent
  },
  {
    path: '**',component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
