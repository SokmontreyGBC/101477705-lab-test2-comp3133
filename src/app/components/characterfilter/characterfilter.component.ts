import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-filter',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characterfilter.component.html',
})
export class CharacterFilterComponent {
  private service = inject(HarryPotterService);
  private router = inject(Router);

  selectedHouse = '';
  characters: Character[] = [];
  loading = false;

  onHouseChange(_event: MatSelectChange): void {
    this.loading = true;
    const obs = this.selectedHouse
      ? this.service.getCharactersByHouse(this.selectedHouse)
      : this.service.getAllCharacters();
    obs.subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  goToDetails(id: string): void {
    this.router.navigate(['/characters', id]);
  }

  getHouseColor(house: string): string {
    const colors: Record<string, string> = {
      Gryffindor: '#c41e3a',
      Slytherin: '#2a623d',
      Hufflepuff: '#f0c75e',
      Ravenclaw: '#222f5b',
    };
    return colors[house] ?? '#aaa';
  }
}
