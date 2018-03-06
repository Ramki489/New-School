import { Component, OnInit, Input } from '@angular/core';
import { students } from '../mockdata/students.mock';
import { tableService } from './table.service';
/**
 * This component has generic feature which will fetch the first row of the data set
 * Can make the Columns optional using the checkbox
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //http://jsfiddle.net/SAWsA/10654/ == Table Paginations
  //@Input() table:string;
  private displayData: any = students;
  private tableDisplayData: Array<any> = [];
  private displayDatalength: number = this.displayData.length;
  private itemsPerPage: number = 10;
  private groupedPages: any = [];
  private options: Array<number> = [10, 20, 50, 100, 500];
  private currentPage: number = 0;

  // Declare local variable
  isDesc: boolean = true;
  column: string = 'id';
  direction: number;
   // Change sort function to this: 
   sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
   }
  constructor( private tableservice:tableService) {

}

  ngOnInit() {
    for (let i = 0; i < this.displayData.length; i++) {
      this.displayData[i].id = i + 1;
      this.displayData[i].name = 'Test' + i + 1;
      this.displayData[i].standard = Math.floor(100/i+1);
    }
    this.groupingPage();
    this.currentPageData();
  }

  private groupingPage() {
    for (let i = 0; i < this.displayData.length; i++) {
      if (i % this.itemsPerPage === 0) {
        this.groupedPages[Math.floor(i / this.itemsPerPage)] = [this.displayData[i]];
      } else {
        this.groupedPages[Math.floor(i / this.itemsPerPage)].push(this.displayData[i]);
      }
    }
  }

  private listenCurrentPage(currPage: number) {
    console.log('listenCurrentPage-----', currPage);
    this.currentPage = currPage;
    this.currentPageData();
  }

  private currentPageData() {
    this.tableDisplayData = this.groupedPages[this.currentPage];
    console.log('this.current page data',this.tableDisplayData)
  }

  private onOptionsSelected(event) {
    this.itemsPerPage = event;
    this.groupingPage();
    this.currentPageData();
    this.tableservice.sendMessage(this.itemsPerPage);
  }
}

