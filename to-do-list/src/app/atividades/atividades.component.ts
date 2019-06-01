import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade'
import { ATIVIDADES } from '../mock-atividades';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  atividades = ATIVIDADES;
  
  selectedAtividade: Atividade;

  constructor() { }

  ngOnInit() {
  }

  onSelect(atividade: Atividade): void {
    this.selectedAtividade = atividade;
  }

}
