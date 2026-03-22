import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  
  email: string = '';
  password: string = '';


  private servicioAuth = inject(AuthService);
  private router = inject(Router);


  iniciarSesion() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if(success){
        alert('Bienvenido al sistema');
        this.router.navigate(['/personajes']);
      }else{
        alert('Credenciales incorrectas');
      }
    })
  }
  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesion cerrada correctamente');
  }

}
