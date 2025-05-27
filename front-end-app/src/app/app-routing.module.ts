import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  }, 
  {
    path: 'home',
    loadChildren: () => import('../app/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
