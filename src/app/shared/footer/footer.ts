import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  private servicioAuth = inject(AuthService);
  isLoggedIn = this.servicioAuth.sesionIniciada;

}
