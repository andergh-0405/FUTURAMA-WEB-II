import { Component, inject, signal } from '@angular/core';
import { Futurama } from '../../service/futurama';
import { Personajes } from '../../models/personajes';

@Component({
  selector: 'app-staff',
  imports: [],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff {

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
