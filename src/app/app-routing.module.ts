import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './movements/movements.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';


const routes: Routes = [
  { path: 'movements', component: MovementsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'create-sale', component: CreateSaleComponent },
  { path: 'sales', component: ViewSalesComponent },
  { path: 'inventory', component: ViewInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
