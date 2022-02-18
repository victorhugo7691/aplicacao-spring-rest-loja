import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    this.pessoa = this.pessoaService.buscarPessoas();
    //this.pessoaService.buscarPessoas().subscribe(pessoa => this.pessoa = pessoa); // NO caso usar o atributo assim pessoa: Pessoa[] = [];
  }

  ngOnInit(): void {
    //this.pessoa = this.pessoaService.buscarPessoas();
  }

}
