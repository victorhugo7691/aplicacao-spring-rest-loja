import { PessoaService } from './../services/pessoa.service';
import { Pessoa } from './pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loja-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa[] | any;
  displayedColumns = ['id', 'nome', 'status', 'telefone'];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoa = this.pessoaService.buscarPessoas();
  }

}
