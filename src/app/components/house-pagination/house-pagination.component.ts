import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/models/house.model';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-pagination',
  templateUrl: './house-pagination.component.html',
  styleUrls: ['./house-pagination.component.css']
})
export class HousePaginationComponent implements OnInit {

  /**
   * A megjelenítendő házak URL-jei
   */
  @Input() houseUrls: string[] = [];

  constructor(public houseService: HouseService) { }

  /**
   * A megjelenítendő könyvek
   */
  houses: House[] = [];

  /**
   * Az aktuális oldal sorszáma,
   * és az oldalak mérete
   */
  housePageNumber: number = 0;
  housePageSize: number = 10;

  /**
   * Az aktuális oldalon szereplő házak
   */
  housePage: House[] = [];

  /**
   * Flag, amely megmondja, hogy
   * be lettek-e töltve az adatok
   * a houses változóba.
   */
  loaded: boolean = false;

  ngOnInit(): void {
  }

  /**
   * Ha megváltozik az Input (houseUrls),
   * letöltjük az url-ek alapján az adatokat.
   */
  ngOnChanges() {
    this.loadHouses();
  }

  /**
   * A kapott url-ből kiszedi a
   * hozzá tartozó  id-t
   * @param url - Az elem url-je
   * @returns - Az elem id-ja
   */
  getHouseId(url: string) {
    let parts = url.split('/');
    return parts[parts.length - 1];
  }

  loadHouses() {
    for(let i = 0; i < this.houseUrls.length; i++) {
      this.getAndStoreHouse(this.houseUrls[i]);
    }
  }

  /**
   * A kapott url-ről letölti az adatot és
   * beteszi a houses változóba.
   * @param url - Az url, ahonnan le kell kérni az adatot.
   */
  getAndStoreHouse(url: string) {
    this.houseService.getHouseByUrl(url).subscribe(data => {
        this.houses.push(data);
    })
  }

  /**
   * A függvény betölti a következő oldal
   * elemeit.
   */
  nextPage() {
    if (this.isNextPage()) {
      this.housePageNumber += 1;
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
    return (this.housePageNumber + 1) * this.housePageSize < this.houses.length
  }

  /**
   * A függvény betölti az előző oldal
   * elemeit.
   */
  prevPage() {
    if (this.isPrevPage()) {
      this.housePageNumber -= 1;
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
    return (this.housePageNumber - 1) * this.housePageSize >= 0;
  }

  /**
   * A függvény betölti housePage változóba
   * az aktuális oldal elemeit, az oldalinformációk
   * alapján.
   */
  loadPage() {
    this.housePage = this.houses.slice(this.housePageNumber * this.housePageSize, this.housePageNumber * this.housePageSize + this.housePageSize);
    this.loaded = true;
  }
}
