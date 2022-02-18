import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  buscarPessoas(){
    return [{ id: 1, nome:"Nome", status: true, telefone: 25698547 }];
  }

}
