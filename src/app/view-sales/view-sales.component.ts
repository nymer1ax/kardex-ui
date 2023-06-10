import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../interfaces/sale';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getSales().subscribe(sales => {
      this.sales = sales;
    });
  }
}

