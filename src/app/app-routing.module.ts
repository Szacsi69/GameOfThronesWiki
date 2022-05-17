import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { HouselistComponent } from './components/houselist/houselist.component';
import { BookComponent } from './components/book/book.component';
import { CharacterComponent } from './components/character/character.component';
import { HouseComponent } from './components/house/house.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooklistComponent},
  {path: 'books/:id', component: BookComponent},
  {path: 'characters', component: CharacterlistComponent},
  {path: 'characters/:id', component: CharacterComponent},
  {path: 'houses', component: HouselistComponent},
  {path: 'houses/:id', component: HouseComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
