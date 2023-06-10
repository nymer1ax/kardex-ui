import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: string;
  productDescription: string;
  productPrice: number;
  quantity: number;

  ngOnInit(): void {
  }

  constructor(private productService: ProductService) {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = 0;
    this.quantity = 0;
  }

  addProduct(): void {
    const product = {
      id: null,
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice
    };

   
    this.productService.addProduct(product, this.quantity)
      .subscribe(() => {
        console.log('Producto agregado exitosamente');
      });
  }

  
}






