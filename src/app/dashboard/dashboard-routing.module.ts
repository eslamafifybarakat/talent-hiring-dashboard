import { WelcomeDashboardComponent } from './components/welcome-dashboard/welcome-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
        data: {
          title: 'titles.home',
          type: 'dashboard'
        }
      },
      { path: 'candidates', loadChildren: () => import('./modules/candidates/candidates.module').then(m => m.CandidatesModule) },
      { path: 'companies', loadChildren: () => import('./modules/companies/companies.module').then(m => m.CompaniesModule) },
      {
        path: 'welcome-dashboard',
        component: WelcomeDashboardComponent,
        data: {
          title: 'titles.welcome',
          type: 'dashboard'
        }
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: '**', redirectTo: 'error' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
