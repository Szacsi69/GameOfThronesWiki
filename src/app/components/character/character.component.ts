import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    })
   }

   /**
    * A karakter adatai
    */
   id = "";

   /**
   * A karakter, amely adatainak megjelenítését
   * a komponens végzi. 
   */
  currentCharacter: Character | null = null;

  ngOnInit(): void {
    this.loadCharacter();
  }

  /**
   * A függvény a service-től lekéri az id alapján
   * az adott karaktert és eltárolja az a currentCharacter
   * változóban.
   */
  loadCharacter() {
    this.characterService.getCharacterById(this.id).subscribe(data => {
      this.currentCharacter = data;
    })
  }

}
