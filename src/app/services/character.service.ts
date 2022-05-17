import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }


  /**
   * Az url ahova a http kérések
   * címezve lesznek.
   */
  private baseUrl: string = 'https://www.anapioficeandfire.com/api/characters';

  /**
   * Az első, előző, következő
   * és utolsó oldalak url-jei
   */
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  /**
   * Letöltjük a baseUrl-ről az első oldalt.
   * A válasz body-jával visszatérünk, a header-jéből
   * pedig kivesszük és eltároljuk az első, előző, következő
   * és utolsó oldal címét.
   * @returns - Observable, ami a http válasz body-ját tartalmazza.
   */
  public getFirstPage() {
    return this.httpClient.get<Character[]>(`${this.baseUrl}?page=1&pageSize=20`,{ observe: 'response' }).pipe(tap(res => {
      const Link  = this.parse_link_header(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];
    }));  
  }

  /**
   * A függvény a paraméterként kapott header-t
   * feldarabolja a megfelelő szegmensekre, ezzel
   * megkapva a benne kapott címeket (first, prev, next, last).
   * A címeket string[]-ben visszaadja.
   * @param header - Parsolandó header
   * @returns - A header-ben található címek string[]-ben
   */
  parse_link_header(header: string | null): {[name: string]: string} {
    if (header !== null) {
      if (header.length == 0) {
        return {};
      }

      let parts = header.split(',');
      var links: {[name: string]: string} = {}
      parts.forEach( p => {
        let section = p.split(';');
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;

      });
      return links;
    }
    else
      return {};
  }

  /**
   * A paraméterként kapott url-ről letöljük az adott oldalt.
   * A válasz body-jával visszatérünk, a header-jéből
   * pedig kivesszük és eltároljuk az első, előző, következő
   * és utolsó oldal címét.
   * @param url - Url, ahonnan le akarjuk tölteni az adatot.
   * @returns - Observable, ami a http válasz body-ját tartalmazza.
   */
  public getPage(url: string){
    return this.httpClient.get<Character[]>(url,{ observe: 'response' }).pipe(tap(res => {
      const Link  = this.parse_link_header(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];       
    }));      
  }

  /**
   * A paramterként kapott karakter id-ját
   * adja vissza a függvény.
   * @param c - Karakter, aminek kíváncsiak vagyunk az id-jára
   * @returns - Id
   */
  public getId(c: Character) {
    let parts = c.url.split('/');
    return parts[parts.length - 1];
  }

   /**
   * A paraméterként kapott id-jú karaktert kéri le,
   * http-n keresztül, és adja vissza a függvény.
   * @param id - A karakter id-ja
   * @returns - Observable, ami a keresett karaktert tartalmazza.
   */
  public getCharacterById(id: string) {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  /**
   * A karaktert a paraméterként kapott url-ről kéri le,
   * http-n keresztül, és adja vissza a függvény.
   * @param url - Url, ahonnan le akarjuk tölteni az adatot.
   * @returns - Observable, ami a keresett karaktert tartalmazza.
   */
  public getCharacterByUrl(url: string) {
    return this.httpClient.get<Character>(url);
  }
}
