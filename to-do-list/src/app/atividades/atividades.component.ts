import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade';
import { ATIVIDADES } from '../mock-atividades';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  atividades: Atividade[];

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit() {
    this.getAtividades();
  }

  getAtividades() {
    this.atividadeService.getAtividades().subscribe(atividades => this.atividades = atividades);
  }


}
