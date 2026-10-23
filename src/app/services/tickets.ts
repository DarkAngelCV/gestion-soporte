import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Ticket {
  id?: number;
  asunto: string;
  solicitante: string;
  descripcion: string;
  categoria: string;
  prioridad: string;
  estado: string;
  fechaRegistro?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Tickets {
  private apiUrl = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {}

  obtenerTickets() {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  crearTicket(ticket: Ticket) {
    return this.http.post(this.apiUrl, ticket);
  }

  actualizarTicket(id: number, ticket: Ticket) {
    return this.http.put(`${this.apiUrl}/${id}`, ticket);
  }

  eliminarTicket(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
