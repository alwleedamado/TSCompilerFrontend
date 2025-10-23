import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControlValueAccessor } from 'app/abstractions/value-accessors/abstract-value-accessor';
import { FreelancerService } from 'pages/freelancer/services/freelancer.service';
import { Observable } from 'rxjs';
import { dropdownItem } from 'shared/models/dropdown';

@Component({
  selector: 'app-flreelancer-input',
  templateUrl: './flreelancer-input.component.html',
  styleUrls: ['./flreelancer-input.component.scss']
})
export class FreelancerInputComponent extends AbstractControlValueAccessor {
  @Input() specialityTypeId: string;
  options$: Observable<dropdownItem[]>
  constructor(@Optional() @Self() ngControl: NgControl, private service: FreelancerService) {
    super(ngControl)
  }
  fillData(query: string) {
    if (!this.specialityTypeId)
      this.options$ = this.service.typeahead(query);
    else
      this.options$ = this.service.getBySpecialityType(this.specialityTypeId, query)
  }
}