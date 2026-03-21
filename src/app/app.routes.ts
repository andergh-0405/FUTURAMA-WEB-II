import { Routes } from '@angular/router';
import { Personajes } from './features/personajes/personajes';
import { HomePage } from './features/home-page/home-page';
import { Staff } from './shared/staff/staff';
import { Formulario } from './shared/formulario/formulario';

export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'personajes',component:Staff},
    {path:'formulario',component:Formulario}

];
