import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { MockDataService } from './service/mockdata.service';
import { HttpClientService } from './service/httpClient.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent, FooterComponent, TableComponent],
  providers: [MockDataService, HttpClientService],
  exports: [HeaderComponent, FooterComponent, TableComponent]
})
export class CommonSharedModule { }
