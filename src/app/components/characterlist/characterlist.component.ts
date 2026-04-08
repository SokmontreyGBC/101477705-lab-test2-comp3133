import { Component, OnInit, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characterlist.component.html',
})
export class CharacterListComponent implements OnInit {
  private service = inject(HarryPotterService);
  private router = inject(Router);

  characters = signal<Character[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
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
