import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'loja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Peças';
  constructor(private router: Router){}

  abrirRota(rota: string){
    this.router.navigate([rota]);
  }
}
