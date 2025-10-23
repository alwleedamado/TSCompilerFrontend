import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialog } from 'utils/base-components/base-dialog';

@Component({
  selector: 'app-add-speciality-form',
  templateUrl: './add-speciality-form.component.html',
  styleUrls: ['./add-speciality-form.component.scss']
})
export class AddSpecialityFormComponent extends BaseDialog implements OnDestroy {
  form: FormGroup;
  @Input() freelancerId: string;
  constructor( ref: DynamicDialogRef, config: DynamicDialogConfig, private layout: LayoutUtilsService) {
    super(ref, config)
  }

  initializeComponent(): void {
    this.form = new FormGroup({
      personId: new FormControl(),
      specialityTypeId: new FormControl()
    })
  }

  save() {
  }

}
