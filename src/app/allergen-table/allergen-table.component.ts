import { Component, OnInit } from '@angular/core';

import { Allergen } from '../data-model/allergen.model';
import { AllergenService } from './allergen.service';

@Component({
  selector: 'app-allergen-table',
  templateUrl: './allergen-table.component.html',
  styleUrls: ['./allergen-table.component.css'],
})
export class AllergenTableComponent implements OnInit {
  allergen: Allergen[] = [
      new Allergen(2, 'Test'),
      new Allergen(3, 'Tset'),
      new Allergen(2, 'Test'),
      new Allergen(3, 'Tset'),
      new Allergen(2, 'Test'),
      new Allergen(5, 'Ts4et'),
    ];

  constructor(private allergenService: AllergenService) {}

  ngOnInit() {
  }

  getAllergens(allergens: Allergen[]) {
    this.allergenService.fetchAllergens().subscribe((allergens) => {
      console.log(allergens);
      this.allergen = allergens;
    });
  }
}
