import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateCionComponent } from './coin/create-cion/create-cion.component';
import { EditCionComponent } from './coin/edit-cion/edit-cion.component';
import { ListCionComponent } from './coin/list-cion/list-cion.component';
import { CreaAdComponent } from './ads/crea-ad/crea-ad.component';
import { EditAdComponent } from './ads/edit-ad/edit-ad.component';
import { ListAdComponent } from './ads/list-ad/list-ad.component';

import { CreateBusinessComponent } from './gst/create-business/create-business.component';
import { EditBusinessComponent } from './gst/edit-business/edit-business.component';
import { ListBusinessComponent } from './gst/list-business/list-business.component';

import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListOrderComponent } from './order/list-order/list-order.component';

const routes: Routes = [
  { path: 
    'coin/create',
   component: CreateCionComponent },
  {     path: 'edit/:id',
   component: EditCionComponent },
  { path: 'coins',
   component: ListCionComponent },
  { path: 'ad/create', 
  component: CreaAdComponent },
  {     path: 'ad/edit/:id',
   component: EditAdComponent },
  { path: 'adunits', 
  component: ListAdComponent },
  { path: 'gst/create', 
  component: CreateBusinessComponent },
  {     path: 'gst/edit/:id',
   component: EditBusinessComponent },
  { path: 'gsts', 
  component: ListBusinessComponent },
  { path: 'product/create', 
  component: CreateProductComponent },
  {     path: 'product/edit/:id',
   component: EditProductComponent },
  { path: 'products', 
  component: ListProductComponent },
  { path: 'orders', 
  component: ListOrderComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
