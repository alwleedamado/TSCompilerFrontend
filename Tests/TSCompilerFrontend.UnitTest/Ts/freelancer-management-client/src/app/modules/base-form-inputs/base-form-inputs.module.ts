import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { FormFieldComponent } from './components/form-field/form-field.component';



@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CoreModule
  ],
  exports: [
    FormFieldComponent
  ]
})
export class BaseFormInputsModule { }
