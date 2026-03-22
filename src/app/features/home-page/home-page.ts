import { Component, inject, signal } from '@angular/core';
import { Futurama } from '../../service/futurama';
import { Personajes } from '../personajes/personajes';
import { AuthService } from '../../service/auth-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private servicioAuth = inject(AuthService);
  
  
    isLoggedIn = this.servicioAuth.sesionIniciada;
  
    verMensaje(){
      alert("Recuerda Iniciar Sesion");
    }

}
