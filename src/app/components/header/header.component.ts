import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Flag, amely mutatja, hogy a
   * menü össze van-e csukva vagy sem.
   * (A bootstrapnek szükséges a reszponzivitás miatt.)
   */
  isMenuCollapsed = true;

}
