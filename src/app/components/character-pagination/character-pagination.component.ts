import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-pagination',
  templateUrl: './character-pagination.component.html',
  styleUrls: ['./character-pagination.component.css']
})
export class CharacterPaginationComponent implements OnInit {

  /**
   * A megjelenítendő karakterek URL-jei
   */
  @Input() characterUrls: string[] = [];

  constructor(public characterService: CharacterService) { }

  /**
   * A megjelenítendő karakterek
   */
  characters: Character[] = [];

  /**
   * Az aktuális oldal sorszáma,
   * és az oldalak mérete
   */
  characterPageNumber: number = 0;
  characterPageSize: number = 10;

  /**
   * Az aktuális oldalon szereplő karakterek
   */
  characterPage: Character[] = [];

  /**
   * Flag, amely megmondja, hogy
   * be lettek-e töltve az adatok
   * a characters változóba.
   */
  loaded: boolean = false;

  ngOnInit(): void {
  }

  /**
   * Ha megváltozik az Input (characterUrls),
   * letöltjük az url-ek alapján az adatokat.
   */
  ngOnChanges() {
    this.loadCharacters();
  }

  /**
   * A kapott url-ből kiszedi a
   * hozzá tartozó  id-t
   * @param url - Az elem url-je
   * @returns - Az elem id-ja
   */
  getCharacterId(url: string) {
    let parts = url.split('/');
    return parts[parts.length - 1];
  }

  loadCharacters() {
    for(let i = 0; i < this.characterUrls.length; i++) {
      this.getAndStoreCharacter(this.characterUrls[i]);
    }
  }

  /**
   * A kapott url-ről letölti az adatot és
   * beteszi a characters változóba.
   * @param url - Az url, ahonnan le kell kérni az adatot.
   */
  getAndStoreCharacter(url: string) {
    this.characterService.getCharacterByUrl(url).subscribe(data => {
        this.characters.push(data);
    })
  }

  /**
   * A függvény betölti a következő oldal
   * elemeit.
   */
  nextPage() {
    if (this.isNextPage()) {
      this.characterPageNumber += 1;
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
    return (this.characterPageNumber + 1) * this.characterPageSize < this.characters.length
  }

  /**
   * A függvény betölti az előző oldal
   * elemeit.
   */
  prevPage() {
    if (this.isPrevPage()) {
      this.characterPageNumber -= 1;
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
    return (this.characterPageNumber - 1) * this.characterPageSize >= 0;
  }

  /**
   * A függvény betölti characterPage változóba
   * az aktuális oldal elemeit, az oldalinformációk
   * alapján.
   */
  loadPage() {
    this.characterPage = this.characters.slice(this.characterPageNumber * this.characterPageSize, this.characterPageNumber * this.characterPageSize + this.characterPageSize);
    this.loaded = true;
  }
}
