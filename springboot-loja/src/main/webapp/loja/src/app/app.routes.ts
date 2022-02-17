import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pessoa' },
  { path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then( m => m.PessoaModule)
  }
]
