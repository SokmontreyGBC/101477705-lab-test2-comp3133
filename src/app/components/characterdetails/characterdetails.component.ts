import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
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
    NgIf,
    RouterLink,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './characterdetails.component.html',
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(HarryPotterService);

  character: Character | null = null;
  loading = true;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.service.getCharacterById(id).subscribe({
      next: (data) => {
        this.character = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
