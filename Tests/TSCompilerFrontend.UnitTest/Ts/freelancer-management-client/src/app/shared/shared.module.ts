import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { BaseFormInputsModule } from 'modules/base-form-inputs/base-form-inputs.module';
import { EntityModule } from 'modules/entity/entity.module';
import { TableListModule } from 'modules/table-list/table-list.module';
import { MessageModule } from 'primeng/message';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { LayoutUtilsService } from './services/layout-utils.service';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
  exports: [
    CoreModule,
    ToastModule,
    TableListModule,
    BaseFormInputsModule,
    EntityModule,
    ProgressSpinnerModule,
    MessageModule,
    MenubarModule

  ], providers: [LayoutUtilsService]
})
export class SharedModule { }
