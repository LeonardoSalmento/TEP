import { Component, OnInit, Input } from '@angular/core';
import { Atividade } from '../atividade';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AtividadeService } from '../atividade.service';


@Component({
  selector: 'app-atividade-detail',
  templateUrl: './atividade-detail.component.html',
  styleUrls: ['./atividade-detail.component.css']
})
export class AtividadeDetailComponent implements OnInit {
  @Input() atividade: Atividade;
  constructor(
  private route: ActivatedRoute,
  private atividadeService: AtividadeService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getAtividade();
  }

  getAtividade(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.atividadeService.getAtividade(id).subscribe(hero => this.atividade = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
