import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(HarryPotterService);

  character = signal<Character | null>(null);
  loading = signal(true);
  placeholder = 'https://via.placeholder.com/400x500?text=No+Image';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.service.getCharacterById(id).subscribe({
      next: (data) => {
        this.character.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  back(): void {
    this.router.navigate(['/characters']);
  }

  imgUrl(c: Character): string {
    return c.image && c.image.trim() ? c.image : this.placeholder;
  }
}
