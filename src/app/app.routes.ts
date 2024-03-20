import { Routes } from '@angular/router';
import { HomePageComponent } from './views/components/home-page/home-page.component';
import { CharacterPageComponent } from './views/components/character-page/character-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'characters', component: CharacterPageComponent}
];
