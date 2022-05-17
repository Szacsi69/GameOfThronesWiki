import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/models/house.model';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-label',
  templateUrl: './house-label.component.html',
  styleUrls: ['./house-label.component.css']
})
export class HouseLabelComponent implements OnInit {

  /**
   * A megjelenítendő ház URL-je
   */
  @Input() houseUrl: string = "";

  constructor(public houseService: HouseService) { }

  /**
   * A megjelenítendő ház
   */
  house: House | null = null;

  ngOnInit(): void {
  }

  /**
   * Ha megváltozik az Input (characterUrl),
   * letöltjük az url-ek alapján az adatokat.
   */
  ngOnChanges() {
    if (this.houseUrl) 
      this.loadHouse(this.houseUrl);
  }

/**
   * Betöltjük a megadott url-ről a servicen
   * keresztül house változóba.
   * @param url 
   */
  loadHouse(url: string) {
    this.houseService.getHouseByUrl(url).subscribe(data => {
        this.house = data;
    })
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
}
