import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


import { tableService } from '../table.service';
@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html'
})
export class PaginateComponent implements OnInit {
  @Input() totalLength: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;
  @Output() notifyCurrentPage = new EventEmitter<number>();
  private pagesLength: number = 5;
  private noOfPages: Array<number> = [];
  private finalLength: number;

  subscription: Subscription;
  constructor(private tableservice: tableService) {
    this.subscription = this.tableservice.getMessage().subscribe(itemsPerPage => {
      this.itemsPerPage = itemsPerPage;
      this.currentPage = 0 ;
      this.Notify();
    });
  }

  ngOnInit() {
    this.getRangeOfPages();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  private getRangeOfPages() {
    console.log(this.currentPage, '------------------This is the current page');
    let pages = Math.round(this.totalLength / this.itemsPerPage);
    this.noOfPages = [];
    let currentPage = this.currentPage;
    if (currentPage < pages && currentPage + 5 <= pages) {
      for (let i = 0; i < this.pagesLength; i++) {
        if (i >= 0) {
          this.noOfPages.push(currentPage++);
        }
      }
      console.log('first loop ');
    } else
      if (this.currentPage + 5 > pages) {
        for (let i = pages - 1; i >= pages - this.pagesLength; i--) {
          if (i >= 0) {
            this.noOfPages.push(i);
          }
        }
        this.noOfPages = this.noOfPages.reverse();
        console.log('second loop ')
      }
    this.finalLength = this.noOfPages[this.noOfPages.length - 1] + 1;
    console.log(this.currentPage, 'after the loop', this.finalLength);
  }

  private Notify() {
    this.notifyCurrentPage.emit(this.currentPage);
    this.getRangeOfPages();
  }
  private getData(pageNum: number) {
    this.currentPage = pageNum;
    this.Notify();
  }

  private prevPage() {
    if (this.currentPage !== 0) {
      this.currentPage = this.currentPage - 1;
    }
    this.Notify();
  }

  private nextPage() {
    if (this.currentPage !== this.noOfPages.length) {
      this.currentPage = this.currentPage + 1;
    }
    this.Notify();
  }

  private firstPage() {
    this.currentPage = 0;
    this.Notify();
  }
  private lastPage() {
    let pages = Math.floor(this.totalLength / this.itemsPerPage);
    this.currentPage = pages;
    this.Notify();
  }
}
