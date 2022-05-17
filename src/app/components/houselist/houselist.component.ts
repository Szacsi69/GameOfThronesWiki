import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrls: ['./houselist.component.css']
})
export class HouselistComponent implements OnInit {

  constructor(public houseService: HouseService) { 
    this.houseList = [];
  }

  /**
   * Megjelenítendő házak
   * egy oldalon
   */
  houseList: House[] | null;

  ngOnInit(): void {
    this.getInitPage();
  }

  /**
   * Letöltjük az első oldalt
   * houseList változóba a 
   * service-n keresztül.
   * (inicializáláskor hívjuk meg)
   */
  getInitPage() {
    this.houseService.getFirstPage().subscribe(data => {
      this.houseList = data.body;
    })
  }

  /**
   * Letöltjük a következő oldalt
   * houseList változóba a 
   * service-n keresztül.
   */
  getNextPage() {
    this.houseService.getPage(this.houseService.next).subscribe(data => {
      this.houseList = data.body;
    })
  }

  /**
   * Letöltjük az utolsó oldalt
   * houseList változóba a 
   * service-n keresztül.
   */
  getLastPage() {
    this.houseService.getPage(this.houseService.last).subscribe(data => {
      this.houseList = data.body;
    })
  }

  /**
   * Letöltjük az előző oldalt
   * houseList változóba a 
   * service-n keresztül.
   */
  getPrevPage() {
    this.houseService.getPage(this.houseService.prev).subscribe(data => {
      this.houseList = data.body;
    })
  }

  /**
   * Letöltjük az első oldalt
   * houseList változóba a 
   * service-n keresztül.
   */
  getFirstPage() {
    this.houseService.getPage(this.houseService.first).subscribe(data => {
      this.houseList = data.body;
    })
  }

}
