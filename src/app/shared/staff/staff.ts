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

  personajes = signal<Personajes[]>([])

  leerPersonajes(){
    this.servicioPersonaje.getPersonajes().subscribe(datos =>
      this.personajes.set(datos.data)
    )
  }

}
