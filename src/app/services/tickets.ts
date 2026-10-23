import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tickets {
  private apiUrl = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {}

  obtenerTickets() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTicket(ticket: any) {
    return this.http.post(this.apiUrl, ticket);
  }

  actualizarTicket(id: number, ticket: any) {
    return this.http.put(`${this.apiUrl}/${id}`, ticket);
  }

  eliminarTicket(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
