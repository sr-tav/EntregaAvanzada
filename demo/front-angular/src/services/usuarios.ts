import { Injectable } from "@angular/core";

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [

    { id: 1, nombre: 'Ana', email: 'ana@email.com', rol: 'Admin' },
    { id: 2, nombre: 'ene', email: 'ene@email.com', rol: 'Developer' },
    { id: 3, nombre: 'ono', email: 'ono@email.com', rol: 'El pepe' }

  ];
  obtenerUsuarios(): Usuario[]{
    return this.usuarios;
  }
}
