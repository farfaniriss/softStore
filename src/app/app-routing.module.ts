import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/:id",
    component: ProductDetailComponent
  },
  {
    path: "faqs",
    component: FaqsComponent
  },
  {
    path: "store-locator",
    component: StoreLocatorComponent
  },
  {
    path: "collection/:id",
    component: CollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
