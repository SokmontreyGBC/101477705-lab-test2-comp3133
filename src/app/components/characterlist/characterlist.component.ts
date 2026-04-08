import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.scss',
})
export class CharacterListComponent implements OnInit {
  private service = inject(HarryPotterService);
  private router = inject(Router);

  characters = signal<Character[]>([]);
  loading = signal(true);
  placeholder = 'https://via.placeholder.com/300x400?text=No+Image';

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe({
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
