import { Injectable } from '@angular/core';
import { Atividade } from './atividade';
import { ATIVIDADES } from './mock-atividades';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor() { }
  
  getAtividades(): Observable<Atividade[]> {
    return of(ATIVIDADES);
  }
  
  getAtividade(id: number): Observable<Atividade> {
    return of(ATIVIDADES.find(atividade => atividade.id === id));
  }

}
