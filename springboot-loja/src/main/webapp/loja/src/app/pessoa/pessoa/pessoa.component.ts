import { Component, OnInit } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';

import { PessoaService } from './../services/pessoa.service';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'loja-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Observable<Pessoa[]>;
  displayedColumns = ['id', 'nome', 'status', 'telefone', 'data'];

  constructor(private pessoaService: PessoaService) {
    this.pessoa = this.pessoaService.buscarPessoas().pipe(delay(500),
    catchError(error => {
      console.log("Erro ao carregar!");
      return of([])
    }));
    //this.pessoaService.buscarPessoas().subscribe(pessoa => this.pessoa = pessoa); // NO caso usar o atributo assim pessoa: Pessoa[] = [];
  }

  ngOnInit(): void {
    //this.pessoa = this.pessoaService.buscarPessoas();
  }

}
