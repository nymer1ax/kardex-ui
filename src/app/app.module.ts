import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovementsComponent } from './movements/movements.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateSaleComponent } from './create-sale/create-sale.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MovementsComponent,
    AddProductComponent,
    CreateSaleComponent,
    ViewSalesComponent,
    ViewInventoryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

