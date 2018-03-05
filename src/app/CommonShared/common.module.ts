import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { MockDataService } from './service/mockdata.service';
import { HttpClientService } from './service/httpClient.service';
import { keysPipe } from './pipe/keyspipe.pipe';
import { headerKeysPipe } from './pipe/headerkeys.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { PaginateComponent } from './table/paginate/paginate.component';
import { tableService } from './table/table.service';
import { OrderrByPipe } from './pipe/oderby.pipe'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, TableComponent,
    keysPipe, headerKeysPipe, FilterPipe, OrderrByPipe,
    PaginateComponent],
  providers: [MockDataService, HttpClientService, tableService],
  exports: [HeaderComponent, FooterComponent, TableComponent]
})
export class CommonSharedModule { }
