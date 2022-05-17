import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BaseComponent } from './components/base/base.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { HouselistComponent } from './components/houselist/houselist.component';
import { BookComponent } from './components/book/book.component';
import { CharacterPaginationComponent } from './components/character-pagination/character-pagination.component';
import { CharacterComponent } from './components/character/character.component';
import { HousePaginationComponent } from './components/house-pagination/house-pagination.component';
import { BookPaginationComponent } from './components/book-pagination/book-pagination.component';
import { HouseComponent } from './components/house/house.component';
import { CharacterLabelComponent } from './components/character-label/character-label.component';
import { HouseLabelComponent } from './components/house-label/house-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BooklistComponent,
    BaseComponent,
    CharacterlistComponent,
    HouselistComponent,
    BookComponent,
    CharacterPaginationComponent,
    CharacterComponent,
    HousePaginationComponent,
    BookPaginationComponent,
    HouseComponent,
    CharacterLabelComponent,
    HouseLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
