import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class SpotifyService {

  constructor(private http: Http){
      console.log('SpotifyService Initialized...');
  }; 

  searchMusic(str: string, type_artist: boolean){
      var headers = new Headers(); 
      var opt = {
          artistName: str, 
          type: type_artist?'artist':'track'
      }
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/search', JSON.stringify(opt),  {headers: headers})
      .map(res => res.json());
  };

  getArtist(id: string){
      var headers = new Headers(); 
      var opt = {
          artistId: id
      }
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/getArtist', JSON.stringify(opt),  {headers: headers})
      .map(res => res.json());
  }; 

  getAlbums(id: string) {
      var headers = new Headers(); 
      var opt = {
          artistId: id
      }
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/getAlbums', JSON.stringify(opt),  {headers: headers})
      .map(res => res.json());
  }

  getAlbum(id: string){
     var headers = new Headers(); 
      var opt = {
          albumId: id
      }
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/getAlbum', JSON.stringify(opt),  {headers: headers})
      .map(res => res.json());
  }
}
