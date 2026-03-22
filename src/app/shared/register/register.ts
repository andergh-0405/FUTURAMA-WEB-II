import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Usuarios } from '../../service/usuarios';
import { AuthService } from '../../service/auth-service';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

   private servicioUsuario = inject(Usuarios);
  public servicioAuth = inject(AuthService);

  private router = inject(Router);

  //LISTA REACTIVA
  listaUsuarios = signal<Usuarios[]>([]);

  //Objeto para vincular con el formulario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    password: '',
    phone:'',
    rol: 'ROLE_USUARIO'
  }

  registrarUsuario() {
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
      alert('Usuario registrado correctamente');
      this.router.navigate(['/iniciarSesion'])
      this.limpiarFormulario();
      
    }, error => {
      alert('Error al registrar el usuario');
      console.error(error);
    });
  }


  limpiarFormulario() {
    this.nuevoUsuario = {
      name: '',
      email: '',
      password: '',
      phone: '',
      rol: 'ROLE_USUARIO'
    }
  }

}
