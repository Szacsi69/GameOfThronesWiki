import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-label',
  templateUrl: './character-label.component.html',
  styleUrls: ['./character-label.component.css']
})
export class CharacterLabelComponent implements OnInit {

  /**
   * A megjelenítendő karakter URL-je
   */
  @Input() characterUrl: string = "";

  constructor(public characterService: CharacterService) { }

  /**
   * A megjelenítendő karakter
   */
  character: Character | null = null;

  ngOnInit(): void {
  }

  /**
   * Ha megváltozik az Input (characterUrl),
   * letöltjük az url-ek alapján az adatokat.
   */
  ngOnChanges() {
    if (this.characterUrl) 
      this.loadCharacter(this.characterUrl);
  }

  /**
   * Betöltjük a megadott url-ről a servicen
   * keresztül character változóba.
   * @param url 
   */
  loadCharacter(url: string) {
    this.characterService.getCharacterByUrl(url).subscribe(data => {
        this.character = data;
    })
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

}
