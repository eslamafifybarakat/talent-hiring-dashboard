import { CoreModule } from './../../../core/core.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidatesListComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class CandidatesModule { }
