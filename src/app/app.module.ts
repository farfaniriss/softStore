import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FaqsComponent,
    StoreLocatorComponent,
    ProductDetailComponent,
    HomeComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
