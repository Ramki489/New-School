import { Component, OnInit, Input } from '@angular/core';
import { students } from '../mockdata/students.mock';
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

  //@Input() table:string;
  private displayData: any = students;
  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.displayData.length; i++) {
      this.displayData[i].id = i + 1;
      this.displayData[i].name = 'Test' + i + 1;
    }
  }
}

