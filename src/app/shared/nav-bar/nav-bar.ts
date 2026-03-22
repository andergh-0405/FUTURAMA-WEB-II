import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../service/auth-service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  private router = inject(Router);
  private servicioAuth = inject(AuthService);


  isLoggedIn = this.servicioAuth.sesionIniciada;
  nombreActual = this.servicioAuth.usuarioActual;
  rolActual = this.servicioAuth.rolActual

 


  logout() {
    this.servicioAuth.logout();
    this.router.navigate(['/login']);

  }
}
