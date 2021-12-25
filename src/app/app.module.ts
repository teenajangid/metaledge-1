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
import { WebsiteComponent } from './Website/website/website.component';
import { OwnSliderComponent } from './shared/own-slider/own-slider.component';
import { AddBannerComponent } from './Admin/pages/banner/add/add.component';
import { ViewBannerComponent } from './Admin/pages/banner/view/view.component';
import { ProductGridComponent } from './shared/product-grid/product-grid.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ChangePasswordComponent } from './Admin/pages/admin/change-password/change-password.component';
import { ProfileComponent } from './Admin/pages/admin/profile/profile.component';
import { AddPageComponent } from './Admin/pages/page/add/add.component';
import { ViewPageComponent } from './Admin/pages/page/view/view.component';
import { AboutUsComponent } from './Website/pages/about-us/about-us.component';
import { ContactUsComponent } from './Website/pages/contact-us/contact-us.component';
import { CategoryGridComponent } from './shared/category-grid/category-grid.component';
import { HeadingContentComponent } from './shared/heading-content/heading-content.component';
import { BannerImageComponent } from './shared/banner-image/banner-image.component';

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
    ViewProductComponent,
    WebsiteComponent,
    OwnSliderComponent,
    AddBannerComponent,
    ViewBannerComponent,
    ProductGridComponent,
    ChangePasswordComponent,
    ProfileComponent,
    AddPageComponent,
    ViewPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoryGridComponent,
    HeadingContentComponent,
    BannerImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RichTextEditorAllModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthGuard, RequestsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
