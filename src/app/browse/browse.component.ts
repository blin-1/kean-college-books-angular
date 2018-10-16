import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {Book} from "../models/book.model";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'edition'];
  dataSource: MatTableDataSource<Book>;
  
  @ViewChild(MatPaginator) 	paginator: MatPaginator;
  @ViewChild(MatSort) 		sort: MatSort;

  constructor(private bookService: BookService) {};

  ngOnInit() {
	
	this.bookService.getBooks().subscribe( data => {
		this.dataSource = new MatTableDataSource(data);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	});

  }
  
  applyFilter(filterValue: string) {
    
	this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }

}



