import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import {Book} from "../models/book.model";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
    
  selection: SelectionModel<Book>;

  displayedColumns: string[] = ['select', 'id', 'title', 'author', 'edition'];
  dataSource: MatTableDataSource<Book>;
  
  @ViewChild(MatPaginator) 	paginator:  MatPaginator;
  @ViewChild(MatSort) 		sort:       MatSort;
  
  constructor(private bookService: BookService) {};

  ngOnInit() {

	this.bookService.getBooks().subscribe( data => {
		this.dataSource = new MatTableDataSource(data);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	});
	
	const initialSelection = [];
	const allowMultiSelect = false;
	this.selection = new SelectionModel<Book>(allowMultiSelect, initialSelection);
  }
  
  applyFilter(filterValue: string) {
    
	this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}



