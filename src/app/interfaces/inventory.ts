export interface InventoryItem {
    id: number;
    quantity: number;
    product: Product;
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  