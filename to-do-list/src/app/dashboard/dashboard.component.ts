import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  atividades: Atividade[] = [];
  constructor(private atividadeService: AtividadeService) { }

  ngOnInit() {
    this.getAtividades();
  }

  getAtividades(): void {
    this.atividadeService.getAtividades()
      .subscribe(atividades => this.atividades = atividades.slice(0, 4));
  }

}
