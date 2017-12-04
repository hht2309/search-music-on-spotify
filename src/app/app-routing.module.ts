import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ArtistComponentComponent} from './artist-component/artist-component.component';
import {AlbumComponentComponent} from './album-component/album-component.component';


const routes: Routes = [
  {path:'', component: SearchComponent,
  pathMatch: 'full'}, 
  {path:'artist/:id', component: ArtistComponentComponent,
  pathMatch: 'full'}, 
  {path:'album/:id', component: AlbumComponentComponent,
  pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
