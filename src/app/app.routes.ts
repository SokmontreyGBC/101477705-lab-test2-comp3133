import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/characterlist/characterlist.component';
import { CharacterDetailsComponent } from './components/characterdetails/characterdetails.component';
import { CharacterFilterComponent } from './components/characterfilter/characterfilter.component';

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'filter', component: CharacterFilterComponent },
];
