import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-pagination',
  templateUrl: './book-pagination.component.html',
  styleUrls: ['./book-pagination.component.css']
})
export class BookPaginationComponent implements OnInit {

  /**
   * A megjelenítendő könyvek URL-jei
   */
  @Input() bookUrls: string[] = [];

  constructor(public bookService: BookService) { }

  /**
   * A megjelenítendő könyvek
   */
  books: Book[] = [];

  /**
   * Az aktuális oldal sorszáma,
   * és az oldalak mérete
   */
  bookPageNumber: number = 0;
  bookPageSize: number = 10;

  /**
   * Az aktuális oldalon szereplő könyvek
   */
  bookPage: Book[] = [];

  /**
   * Flag, amely megmondja, hogy
   * be lettek-e töltve az adatok
   * a books változóba.
   */
  loaded: boolean = false;

  ngOnInit(): void {
  }

  /**
   * Ha megváltozik az Input (bookUrls),
   * letöltjük az url-ek alapján az adatokat.
   */
  ngOnChanges() {
    this.loadBooks();
  }

  /**
   * A kapott url-ből kiszedi a
   * hozzá tartozó  id-t
   * @param url - Az elem url-je
   * @returns - Az elem id-ja
   */
  getBookId(url: string) {
    let parts = url.split('/');
    return parts[parts.length - 1];
  }

  loadBooks() {
    for(let i = 0; i < this.bookUrls.length; i++) {
      this.getAndStoreBook(this.bookUrls[i]);
    }
  }

  /**
   * A kapott url-ről letölti az adatot és
   * beteszi a books változóba.
   * @param url - Az url, ahonnan le kell kérni az adatot.
   */
  getAndStoreBook(url: string) {
    this.bookService.getBookByUrl(url).subscribe(data => {
        this.books.push(data);
    })
  }

  /**
   * A függvény betölti a következő oldal
   * elemeit.
   */
  nextPage() {
    if (this.isNextPage()) {
      this.bookPageNumber += 1;
      this.loadPage();
    }
  }

  /**
   * Visszaadja, hogy van-e 
   * kövektező oldal.
   * @returns - true, ha van
   *            false, ha nincs
   */
  isNextPage() {
    return (this.bookPageNumber + 1) * this.bookPageSize < this.books.length
  }

  /**
   * A függvény betölti az előző oldal
   * elemeit.
   */
  prevPage() {
    if (this.isPrevPage()) {
      this.bookPageNumber -= 1;
      this.loadPage();
    }
  }

  /**
   * Visszaadja, hogy van-e 
   * előző oldal.
   * @returns - true, ha van
   *            false, ha nincs
   */
  isPrevPage() {
    return (this.bookPageNumber - 1) * this.bookPageSize >= 0;
  }

  /**
   * A függvény betölti bookPage változóba
   * az aktuális oldal elemeit, az oldalinformációk
   * alapján.
   */
  loadPage() {
    this.bookPage = this.books.slice(this.bookPageNumber * this.bookPageSize, this.bookPageNumber * this.bookPageSize + this.bookPageSize);
    this.loaded = true;
  }

}
