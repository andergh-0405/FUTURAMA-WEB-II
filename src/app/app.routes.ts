import { Routes } from '@angular/router';
import { Personajes } from './features/personajes/personajes';
import { HomePage } from './features/home-page/home-page';

export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'personajes',component:Personajes}

];
