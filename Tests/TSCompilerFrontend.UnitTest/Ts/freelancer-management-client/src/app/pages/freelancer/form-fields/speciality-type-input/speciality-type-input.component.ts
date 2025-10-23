import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AbstractControlValueAccessor } from 'app/abstractions/value-accessors/abstract-value-accessor';
import { SpecialityTypeService } from 'pages/freelancer/services/speciality-type.service';
import { Observable, of } from 'rxjs';
import { dropdownItem } from 'shared/models/dropdown';

@Component({
  selector: 'app-speciality-type-input',
  templateUrl: './speciality-type-input.component.html',
  styleUrls: ['./speciality-type-input.component.scss']
})
export class SpecialityTypeInputComponent  extends AbstractControlValueAccessor implements OnInit {
  options$: Observable<dropdownItem[]> = of([])
  constructor(@Optional() @Self() ngControl: NgControl, private service: SpecialityTypeService) {
    super(ngControl)
   }
  ngOnInit(): void {
    this.options$ = this.service.getDdl();
  }
}
