import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {

  constructor(public characterService: CharacterService) { 
    this.characterList = [];
  }

  /**
   * Megjelenítendő karakterek
   * egy oldalon
   */
  characterList: Character[] | null;

  ngOnInit(): void {
    this.getInitPage();
  }

  /**
   * Letöltjük az első oldalt
   * characterList változóba a 
   * service-n keresztül.
   * (inicializáláskor hívjuk meg)
   */
  getInitPage() {
    this.characterService.getFirstPage().subscribe(data => {
      this.characterList = data.body;
    })
  }

  /**
   * Letöltjük a következő oldalt
   * characterList változóba a 
   * service-n keresztül.
   */
  getNextPage() {
    this.characterService.getPage(this.characterService.next).subscribe(data => {
      this.characterList = data.body;
    })
  }

  /**
   * Letöltjük az utolsó oldalt
   * characterList változóba a 
   * service-n keresztül.
   */
  getLastPage() {
    this.characterService.getPage(this.characterService.last).subscribe(data => {
      this.characterList = data.body;
    })
  }

  /**
   * Letöltjük az előző oldalt
   * characterList változóba a 
   * service-n keresztül.
   */
  getPrevPage() {
    this.characterService.getPage(this.characterService.prev).subscribe(data => {
      this.characterList = data.body;
    })
  }

  /**
   * Letöltjük az első oldalt
   * characterList változóba a 
   * service-n keresztül.
   */
  getFirstPage() {
    this.characterService.getPage(this.characterService.first).subscribe(data => {
      this.characterList = data.body;
    })
  }

}
