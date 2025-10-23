import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'core/core.module';
import { MessageService } from 'primeng/api';
import { CountryService } from 'shared/services/country.service';
import { CustomerService } from 'shared/services/customer.service';
import { EventService } from 'shared/services/event.service';
import { IconService } from 'shared/services/icon.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { NodeService } from 'shared/services/node.service';
import { PhotoService } from 'shared/services/photo.service';
import { ProductService } from 'shared/services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent, NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService,
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
