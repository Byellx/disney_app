import { Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent,
        title: 'Home'
    },
    {
        path: 'characters/:id',
        component: CharacterComponent,
        title: 'Character'
    }
];
