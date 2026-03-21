import { Component, inject, signal } from '@angular/core';
import { Futurama } from '../../service/futurama';
import { Personajes } from '../personajes/personajes';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private servicioPersonaje = inject(Futurama);

  personaje = signal<Personajes[]>([])

  ngOnInit(): void {
    this.leerPersonajes();
  }

  leerPersonajes() {
    this.servicioPersonaje.getPersonajes().subscribe(datos =>
      this.personaje.set(datos.items)
    );
  }

}
