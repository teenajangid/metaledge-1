import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { ChangePasswordComponent } from './Admin/pages/admin/change-password/change-password.component';
import { ProfileComponent } from './Admin/pages/admin/profile/profile.component';
import { AddBannerComponent } from './Admin/pages/banner/add/add.component';
import { ViewBannerComponent } from './Admin/pages/banner/view/view.component';
import { AddCategoryComponent } from './Admin/pages/category/add/add.component';
import { ViewCategoryComponent } from './Admin/pages/category/view/view.component';
import { DashboardComponent } from './Admin/pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Admin/pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Admin/pages/login/login.component';
import { AddPageComponent } from './Admin/pages/page/add/add.component';
import { ViewPageComponent } from './Admin/pages/page/view/view.component';
import { AddProductComponent } from './Admin/pages/product/add/add.component';
import { ViewProductComponent } from './Admin/pages/product/view/view.component';
import { AuthGuard } from './guard/auth.guard';
import { Error404Component } from './shared/error404/error404.component';
import { AboutUsComponent } from './Website/pages/about-us/about-us.component';
import { ContactUsComponent } from './Website/pages/contact-us/contact-us.component';
import { HomeComponent } from './Website/pages/home/home.component';
import { WebsiteComponent } from './Website/website/website.component';

const routes: Routes = [
  {
    path: 'admin',component: AdminComponent,
    children:[
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]
      },
      {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
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
      // Banner
      {
        path: 'add-banner', component: AddBannerComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-banner/:id', component: AddBannerComponent, canActivate: [AuthGuard]
      },
      {
        path: 'view-banner', component: ViewBannerComponent, canActivate: [AuthGuard]
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
      // Page Content

      {
        path: 'add-page', component: AddPageComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-page/:id', component: AddPageComponent, canActivate: [AuthGuard]
      },
      {
        path: 'view-page', component: ViewPageComponent, canActivate: [AuthGuard]
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
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'forgot-password', component: ForgotpasswordComponent
  },
  {
    path: '', redirectTo: "/home",pathMatch: 'full'
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'contact-us',component: ContactUsComponent
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
