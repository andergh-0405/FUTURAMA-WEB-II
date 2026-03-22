import { inject, Injectable, signal } from '@angular/core';
import { Usuarios } from './usuarios';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

private servicioUsuario = inject(Usuarios);

  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  public rolActual = signal<string | null>(localStorage.getItem('rol'));

  public usuarioActual = signal<string | null>(localStorage.getItem('name'));

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email &&
          u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('usuario', JSON.stringify(usuarioCoincide));
          localStorage.setItem('name',usuarioCoincide.name);
          localStorage.setItem('rol', usuarioCoincide.rol);
          this.rolActual.set(usuarioCoincide.rol);
          this.sesionIniciada.set(true);
          this.usuarioActual.set(usuarioCoincide.name);
          return true;
        }
        return false;
      })
    );

  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('usuario');
    this.sesionIniciada.set(false);
    
    localStorage.removeItem('rol');
    this.rolActual.set(null);
    this.usuarioActual.set(null);
  }

}
