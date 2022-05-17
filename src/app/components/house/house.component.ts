import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { House } from 'src/app/models/house.model';
import { CharacterService } from 'src/app/services/character.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(public houseService: HouseService, private characterService: CharacterService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    })
  }
  
  /**
   * A ház id-ja
   */
  id = "";

  /**
   * A ház, amely adatainak megjelenítését
   * a komponens végzi. 
   */
  currentHouse: House | null = null;

  ngOnInit(): void {
    this.loadHouse();
  }

  /**
   * A függvény a service-től lekéri az id alapján
   * az adott házat és eltárolja az a currentHouse
   * változóban.
   */
  loadHouse() {
    this.houseService.getHouseById(this.id).subscribe(data => {
      this.currentHouse = data;
    })
  }
}
