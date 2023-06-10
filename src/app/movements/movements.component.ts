import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements: any[];

  constructor(private movementsService: MovementsService) {
    this.movements = [];
  }

  ngOnInit(): void {
    this.getMovements();
  }

  getMovements(): void {
    this.movementsService.getMovements()
      .subscribe(data => {
        this.movements = data;
      });
  }
}

