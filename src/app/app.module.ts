import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { AppRoutingModule } from './/app-routing.module';
import { ArtistComponentComponent } from './artist-component/artist-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponentComponent,
    AlbumComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, 
    AngularFontAwesomeModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
