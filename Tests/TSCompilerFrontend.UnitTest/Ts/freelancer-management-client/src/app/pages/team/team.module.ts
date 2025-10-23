import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FreelancerFormFieldsModule } from 'pages/freelancer/form-fields/freelancer-form-fields.module';
import { SharedModule } from 'shared/shared.module';
import { TeamFormComponent } from './compoments/team-form/team-form.component';
import { TeamListComponent } from './compoments/team-list/team-list.component';
import { TeamMemberFormComponent } from './compoments/team-member-form/team-member-form.component';
import { TeamMembersListComponent } from './compoments/team-members-list/team-members-list.component';
import { TeamSingleDetailComponent } from './compoments/team-single-detail/team-single-detail.component';
import { TeamViewComponent } from './compoments/team-view/team-view.component';
import { TeamStore } from './state/team/team.store';
import { TeamStoreService } from './state/team/team.store.service';
import { TeamQuery } from './state/team/team.query';



@NgModule({
  declarations: [
    TeamListComponent,
    TeamFormComponent,
    TeamViewComponent,
    TeamSingleDetailComponent,
    TeamMembersListComponent,
    TeamMemberFormComponent
  ],
  imports: [
    SharedModule,
    FreelancerFormFieldsModule,
    RouterModule.forChild([
      { path: '', component: TeamListComponent },
      {path:'view/:id', component: TeamViewComponent}
    ])
  ],
  providers:[TeamStore, TeamStoreService, TeamQuery]
})
export class TeamModule { }
