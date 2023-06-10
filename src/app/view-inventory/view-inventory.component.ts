import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../interfaces/inventory';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  inventory: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(items => {
      this.inventory = items;
    });
  }
}
