import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.scss',
})
export class CharacterFilterComponent {
  private service = inject(HarryPotterService);
  private router = inject(Router);

  houses = ['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selected = 'All';
  characters = signal<Character[]>([]);
  loading = signal(false);
  placeholder = 'https://via.placeholder.com/300x400?text=No+Image';

  onChange(): void {
    this.loading.set(true);
    const obs =
      this.selected === 'All'
        ? this.service.getAllCharacters()
        : this.service.getCharactersByHouse(this.selected.toLowerCase());
    obs.subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  open(c: Character): void {
    this.router.navigate(['/characters', c.id]);
  }

  houseClass(house: string): string {
    return 'house-' + (house ? house.toLowerCase() : 'unknown');
  }

  imgUrl(c: Character): string {
    return c.image && c.image.trim() ? c.image : this.placeholder;
  }
}
