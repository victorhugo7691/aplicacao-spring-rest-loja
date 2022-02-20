import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'pessoa' },
  { path: '', pathMatch: 'full', component: TelaInicialComponent },
  { path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then( m => m.PessoaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
