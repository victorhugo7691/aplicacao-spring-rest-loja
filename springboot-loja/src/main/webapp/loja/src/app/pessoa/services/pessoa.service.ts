import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pessoa } from '../pessoa/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:8081/pessoa'
  constructor(private httpClient: HttpClient) { }

  /*buscarPessoas(){
    return [{ id: 1, nome:"Nome", status: true, telefone: 25698547 }];
  }*/
  buscarPessoas(){
    return this.httpClient.get<Pessoa[]>(this.API);
  }

}
