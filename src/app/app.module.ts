import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Admin/admin.component';
import { Error404Component } from './shared/error404/error404.component';
import { NavComponent } from './Admin/shared/nav/nav.component';
import { SidebarComponent } from './Admin/shared/sidebar/sidebar.component';
import { DashboardComponent } from './Admin/pages/dashboard/dashboard.component';
import { HomeComponent } from './Website/pages/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './Admin/pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestsService } from './service/requests.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ForgotpasswordComponent } from './Admin/pages/forgotpassword/forgotpassword.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddCategoryComponent } from './Admin/pages/category/add/add.component';
import { ViewCategoryComponent } from './Admin/pages/category/view/view.component';
import { ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './Admin/pages/product/add/add.component';
import { ViewProductComponent } from './Admin/pages/product/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    Error404Component,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ForgotpasswordComponent,
    HeaderComponent,
    FooterComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard, RequestsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
