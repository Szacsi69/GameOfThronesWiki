import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(public bookService: BookService) {
    this.bookList = [];
  }

  /**
   * Megjelenítendő könyvek
   * egy oldalon
   */
  bookList: Book[] | null;

  ngOnInit(): void {
    this.getInitPage();
  }

  /**
   * Letöltjük az első oldalt
   * bookList változóba a 
   * service-n keresztül.
   * (inicializáláskor hívjuk meg)
   */
  getInitPage() {
    this.bookService.getFirstPage().subscribe(data => {
      this.bookList = data.body;
    })
  }

  /**
   * Letöltjük a következő oldalt
   * bookList változóba a 
   * service-n keresztül.
   */
  getNextPage() {
    this.bookService.getPage(this.bookService.next).subscribe(data => {
      this.bookList = data.body;
    })
  }

  /**
   * Letöltjük az utolsó oldalt
   * bookList változóba a 
   * service-n keresztül.
   */
  getLastPage() {
    this.bookService.getPage(this.bookService.last).subscribe(data => {
      this.bookList = data.body;
    })
  }

  /**
   * Letöltjük az előző oldalt
   * bookList változóba a 
   * service-n keresztül.
   */
  getPrevPage() {
    this.bookService.getPage(this.bookService.prev).subscribe(data => {
      this.bookList = data.body;
    })
  }

  /**
   * Letöltjük az első oldalt
   * bookList változóba a 
   * service-n keresztül.
   */
  getFirstPage() {
    this.bookService.getPage(this.bookService.first).subscribe(data => {
      this.bookList = data.body;
    })
  }

}
