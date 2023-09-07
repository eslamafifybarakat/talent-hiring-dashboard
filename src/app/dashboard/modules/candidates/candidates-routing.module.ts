import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';

const routes: Routes = [{
  path: '', component: CandidatesComponent, children: [
    { path: 'list', component: CandidatesListComponent },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
