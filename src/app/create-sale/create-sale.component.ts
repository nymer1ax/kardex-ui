import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SaleService } from '../sale.service';
import { Product } from '../interfaces/product';
import { CreateSale } from '../interfaces/createsale';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  availableProducts: number[] = [];
  products: Product[] = [];
  selectedProduct: number | undefined;
  selectedQuantity: number | undefined;

  constructor(
    private productService: ProductService,
    private saleService: SaleService
  ) { }

  ngOnInit(): void {
    this.productService.getAvailableProducts().subscribe(products => {
      this.products = products;
      this.availableProducts = products.map(product => product.id);
    });
  }

  getProductById(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.name : '';
  }

  createSale(): void {
    if (this.selectedProduct && this.selectedQuantity) {
      const sale: CreateSale = {
        date: "2023-06-09",
        products: [this.selectedProduct],
        quantities: [this.selectedQuantity]
      };

      this.saleService.createSale(sale).subscribe(() => {
        console.log('Venta creada exitosamente');
      });
    }
  }
}












