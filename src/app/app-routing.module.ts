import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ArtistComponentComponent} from './artist-component/artist-component.component';
import {AlbumComponentComponent} from './album-component/album-component.component';


const routes: Routes = [
  {path:'', component: SearchComponent}, 
  {path:'artist/:id', component: ArtistComponentComponent}, 
  {path:'album/:id', component: AlbumComponentComponent}
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
