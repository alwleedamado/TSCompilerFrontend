import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'shared/shared.module';
import { AddSpecialityFormComponent } from './components/freelancer/add-speciality-form/add-speciality-form.component';
import { FreelancerFormComponent } from './components/freelancer/freelancer-form/freelancer-form.component';
import { FreelancerListComponent } from './components/freelancer/freelancer-list/freelancer-list.component';
import { FreelancerSingleDetailComponent } from './components/freelancer/freelancer-single-detail/freelancer-single-detail.component';
import { FreelancerViewComponent } from './components/freelancer/freelancer-view/freelancer-view.component';
import { SpecialityFormComponent } from './components/speciality/speciality-form/speciality-type-form.component';
import { SpecialityListComponent } from './components/speciality/speciality-list/speciality-list.component';
import { FreelancerBaseComponent } from './freelancer-base.component';
import { statics } from './freelancer.statics';
import { FreelancerStore } from './state/freelancer/freelancer.store';
import { FreelancerQuery } from './state/freelancer/freelancer.query';
import { FreelancerStoreService } from './state/freelancer/freelancer.store.service';
import { FreelancerFormFieldsModule } from './form-fields/freelancer-form-fields.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';




@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent,
    SpecialityListComponent,
    SpecialityFormComponent,
    AddSpecialityFormComponent,
    FreelancerBaseComponent
  ],
  imports: [
    SharedModule,
    ChipModule,
    RouterModule.forChild([
      {
        path: '', component: FreelancerBaseComponent,
        children: [
          { path: '', component: FreelancerListComponent },
          { path: `view/:id`, component: FreelancerViewComponent },
          { path: statics.urls.SpecialityType, component: SpecialityListComponent }
        ]
      }
    ]),
    FreelancerFormFieldsModule,
    ToastModule,
    MessageModule,
    AutoCompleteModule
  ],bootstrap: [FreelancerFormComponent],
  providers: [FreelancerStore, FreelancerQuery, FreelancerStoreService]
})
export class FreelancerModule {

}
