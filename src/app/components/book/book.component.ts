import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    })
  }
  
  /**
   * A könyv id-ja
   */
  id = "";

  /**
   * A könyv, amely adatainak megjelenítését
   * a komponens végzi. 
   */
  currentBook: Book | null = null;

  ngOnInit(): void {
    this.loadBook();
  }

  /**
   * A függvény a service-től lekéri az id alapján
   * az adott könyvet és eltárolja az a currentBook
   * változóban.
   */
  loadBook() {
    this.bookService.getBookById(this.id).subscribe(data => {
      this.currentBook = data;
    })
  }
}
