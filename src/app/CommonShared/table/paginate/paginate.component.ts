import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html'
})
export class PaginateComponent implements OnInit {
  @Input() totalLength: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;
  @Output() notifyCurrentPage = new EventEmitter<number>();

  private noOfPages: Array<number> = [];
  constructor() { }

  ngOnInit() {

    let pages = this.totalLength / this.itemsPerPage;
    for (let i = 0; i < pages; i++) {
      this.noOfPages.push(i);
    }
    console.log(this.currentPage);
  }

  private Notify(){
    this.notifyCurrentPage.emit(this.currentPage);
  }
  private getData(pageNum: number) {
    this.currentPage = pageNum;
    console.log(this.currentPage,'Page');
    this.Notify();
  }

  private prevPage(){
    if(this.currentPage !== 0 ){
      this.currentPage=this.currentPage-1;
    }
    this.Notify();
  }

  private nextPage(){
    if(this.currentPage !== this.noOfPages.length){
      this.currentPage=this.currentPage+1;
    }
    this.Notify();
  }

}
