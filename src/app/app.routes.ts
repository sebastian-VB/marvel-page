import { Routes } from '@angular/router';
import { HomePageComponent } from './views/components/home-page/home-page.component';
import { CharacterListPageComponent } from './views/components/character-list-page/character-page.component';
import { ComicListPageComponent } from './views/components/comic-list-page/comic-list-page.component';
import { SeriesListPageComponent } from './views/components/series-list-page/series-list-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'characters', component: CharacterListPageComponent},
    {path: 'comics', component: ComicListPageComponent},
    {path: 'series', component: SeriesListPageComponent}
];
