// import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule, NgbDropdownModule, NgbPaginationModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireModule } from '@angular/fire';
// import {  AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';
// import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './shared/services/auth/auth.service';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesService } from './shared/services/categories/categories.service';
import { SingleProductComponent } from './pages/home/single-product/single-product.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    SingleProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbModalModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
   // AngularFireAuthModule
  ],
  providers: [AuthService, CategoriesService, CartComponent, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
