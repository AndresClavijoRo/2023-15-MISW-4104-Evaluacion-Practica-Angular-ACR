import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'plantas', loadChildren: () => import('./modulos/plantas/plantas.module').then(m => m.PlantasModule) },
  { path: '**', redirectTo: 'plantas' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
