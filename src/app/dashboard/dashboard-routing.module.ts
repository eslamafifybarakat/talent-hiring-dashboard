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
        path: '',
        component: HomeComponent,
        data: {
          title: 'titles.home',
          type: 'dashboard'
        }
      },
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
        redirectTo: 'welcome-dashboard',
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
