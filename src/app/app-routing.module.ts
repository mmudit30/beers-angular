import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouriteComponent } from "./favourite/favourite.component";
import { ProductComponent } from "./product/product.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: '' , redirectTo:'/home' , pathMatch: 'full'},
  { path: 'home' , component: ProductComponent},
  { path: 'products' , component: ProductComponent},
  { path: 'favourites' , component: FavouriteComponent},
  { path: 'search' , component: SearchComponent},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavBarComponent,
                                  PageNotFoundComponent,
                                  FavouriteComponent,
                                  ProductComponent,
                                  SearchComponent
                                  ]