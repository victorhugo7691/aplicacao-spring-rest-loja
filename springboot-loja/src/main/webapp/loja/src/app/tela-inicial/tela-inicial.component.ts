import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loja-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirRota(rota: string){
    this.router.navigate([rota]);
  }
}
