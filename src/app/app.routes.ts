import { Routes } from '@angular/router';
import { Personajes } from './features/personajes/personajes';
import { HomePage } from './features/home-page/home-page';
import { Staff } from './shared/staff/staff';
import { Formulario } from './shared/formulario/formulario';
import { Login } from './shared/login/login';
import { Register } from './shared/register/register';
import { canActiveGuard } from './guards/can-active-guard';
import { canMatchGuard } from './guards/can-match-guard';

export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'personajes',component:Staff,canActivate:[canActiveGuard]},
    {path:'formulario',component:Formulario,canMatch:[canMatchGuard]},
    {path:'login',component:Login},
    {path:'register',component:Register}

];
