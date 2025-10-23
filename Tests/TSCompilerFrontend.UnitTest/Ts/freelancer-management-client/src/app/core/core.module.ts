import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardComponent } from './components/card/card.component';
import { FieldViewComponent } from './components/field-view/field-view.component';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { LoggingInterceptor } from './services/intercept.service';
@NgModule({
  declarations: [
    CardComponent,
    PromptComponent,
    FormFooterComponent,
    // Pipes
    EnumToArrayPipe,
    FieldViewComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Prome modules
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    ToastModule,
    MessageModule
    // Pipes

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Prime modules
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    ChipModule,

    // Components
    CardComponent,
    PromptComponent,
    FormFooterComponent,
    FieldViewComponent,

    // Pipes
    EnumToArrayPipe

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    DialogService,
  ]
})
export class CoreModule { }
