import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsViewComponent } from './components/products/products-view/products-view.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { UsersComponent } from './components/users/users.component';
import { UsersViewComponent } from './components/users/users-view/users-view.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProductsComponent,
    ProductsViewComponent,
    ProductsCreateComponent,
    UsersComponent,
    UsersViewComponent,
    UsersCreateComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
