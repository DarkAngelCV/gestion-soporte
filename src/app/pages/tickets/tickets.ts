import { Component, OnInit } from '@angular/core';
import { Tickets as TicketsService } from '../../services/tickets';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tickets',
  imports: [CommonModule, FormsModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets implements OnInit {

  listaTickets: any[] = [];
  error = '';
  mostrarFormulario = false;
  editando = false;
  ticketId: number | null = null;

  nuevoTicket = {
    asunto: '',
    solicitante: '',
    descripcion: '',
    categoria: '',
    prioridad: '',
    estado: 'Pendiente'
  };

  constructor(private ticketsService: TicketsService) {}

  ngOnInit(): void {
    this.cargarTickets();
  }

  cargarTickets(): void {
    this.ticketsService.obtenerTickets().subscribe({

      next: (datos: any[]) => {
        this.error = '';
        this.listaTickets = datos;
      },
      error: (error) => {
        console.error('Error al cargar tickets:', error);
        this.error = 'No se pudieron cargar los tickets.';
        this.listaTickets = [];
      }
    });
  }

  crearTicket(): void {
    if (
  !this.nuevoTicket.asunto.trim() ||
  !this.nuevoTicket.solicitante.trim() ||
  !this.nuevoTicket.descripcion.trim() ||
  !this.nuevoTicket.categoria ||
  !this.nuevoTicket.prioridad
) {
  alert('Por favor, completa todos los campos obligatorios.');
  return;
}
    if (this.editando && this.ticketId !== null) {
      this.ticketsService.actualizarTicket(this.ticketId, this.nuevoTicket).subscribe({
        next: () => {
          alert('Ticket actualizado correctamente');
          this.limpiarFormulario();
          this.cargarTickets();
        },
        error: (error) => {
          console.error(error);
          this.error = 'No se pudo actualizar el ticket.';
        }
      });
    } else {
      this.ticketsService.crearTicket(this.nuevoTicket).subscribe({
        next: () => {
          alert('Ticket creado correctamente');
          this.limpiarFormulario();
          this.cargarTickets();
        },
        error: (error) => {
          console.error(error);
          this.error = 'No se pudo crear el ticket.';
        }
      });
    }
  }

  editarTicket(ticket: any): void {
    this.editando = true;
    this.ticketId = ticket.id;
    this.mostrarFormulario = true;

    this.nuevoTicket = {
      asunto: ticket.asunto,
      solicitante: ticket.solicitante,
      descripcion: ticket.descripcion,
      categoria: ticket.categoria,
      prioridad: ticket.prioridad,
      estado: ticket.estado
    };
  }


  eliminarTicket(id: number): void {
    const confirmar = confirm('¿Estás seguro de que deseas eliminar este ticket?');

    if (!confirmar) {
      return;
    }

    this.ticketsService.eliminarTicket(id).subscribe({
      next: () => {
        alert('Ticket eliminado correctamente');
        this.cargarTickets();
      },
      error: (error) => {
        console.error('Error al eliminar ticket:', error);
        this.error = 'No se pudo eliminar el ticket.';
      }
    });
  }


  limpiarFormulario(): void {
    this.mostrarFormulario = false;
    this.editando = false;
    this.ticketId = null;

    this.nuevoTicket = {
      asunto: '',
      solicitante: '',
      descripcion: '',
      categoria: '',
      prioridad: '',
      estado: 'Pendiente'
    };
  }
}
