import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'stranger-things',
    loadChildren: () => import('./series/stranger-things/stranger-things.module').then( m => m.StrangerThingsPageModule)
  },
  {
    path: 'stargirl',
    loadChildren: () => import('./series/stargirl/stargirl.module').then( m => m.StargirlPageModule)
  },
  {
    path: 'birds-of-prey',
    loadChildren: () => import('./filmes/birds-of-prey/birds-of-prey.module').then( m => m.BirdsOfPreyPageModule)
  },
  {
    path: 'joker',
    loadChildren: () => import('./filmes/joker/joker.module').then( m => m.JokerPageModule)
  },
  {
    path: 'liga-da-justica',
    loadChildren: () => import('./desenhos/liga-da-justica/liga-da-justica.module').then( m => m.LigaDaJusticaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
