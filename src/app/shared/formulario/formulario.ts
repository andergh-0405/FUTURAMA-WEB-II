import { Component, inject, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Usuarios } from '../../service/usuarios';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private servicioUsuario = inject(Usuarios);
  public servicioAuth = inject(AuthService);

  //LISTA REACTIVA
  listaUsuarios = signal<Usuario[]>([]);

  //Objeto para vincular con el formulario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
      password: '',
      rol: 'ROLE_USUARIO'
  }

  //PARA CONTRROLAR LA ETIQUETA DEL BOTON
  editando = false;

  ngOnInit() {
    this.obtenerUsuarios();
  }

  //LEER
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(datosUusuarios => {
      this.listaUsuarios.set(datosUusuarios);
    })
  }

  registrarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id,this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
      });
    }else{
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
    this.limpiarFormulario();
  

  }

  eliminarUsuario(id:string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {

        //Elimina el usuario de la vista de la tabla
        //this.listaUsuarios.set(this.listaUsuarios().filter(u=> u.id !== id));

        this.obtenerUsuarios();
      });
    }
  }

  seleccionarParaEditar(user:Usuario) {
    this.editando=true; 
    this.nuevoUsuario = { ...user }; 
  }

  limpiarFormulario() {
    this.editando=false;
    this.nuevoUsuario = {
      name: '',
      email: '',
      phone: '',
      password: '',
      rol: 'ROLE_USUARIO'
    }
  }

  

 

  

}
