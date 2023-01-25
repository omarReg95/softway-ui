import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathologieCalculateurComponent } from './pathologie-calculateur/pathologie-calculateur.component';

const routes: Routes = [
       {
        path: '',
        component: PathologieCalculateurComponent
       }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologieRoutingModule { }
