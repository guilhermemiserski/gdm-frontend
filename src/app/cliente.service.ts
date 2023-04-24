import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiURL = 'http://localhost:8000/clientes/';

  constructor(private http: HttpClient) {}

  enviarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiURL, cliente);
  }

  buscarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }
}
