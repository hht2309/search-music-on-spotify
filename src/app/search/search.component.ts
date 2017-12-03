import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {SpotifyService} from '../spotify.service';
import {Artist} from '../searchType/Artist'; 
import {Track} from '../searchType/Track';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerm = new Subject<string>();

  ngOnInit() {
  }
  
  searchStr: string;
  searchResult_artist : Artist[];
  searchResult_track: Track[]; 
  type_artist: boolean; 
  Math: any; 
  Arr: any;

  constructor(private spotifyService: SpotifyService){
    this.Math = Math; 
    this.Arr = Array; 
    this.type_artist = true; 
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr, this.type_artist)
    .subscribe(
      results=>{
        if(this.type_artist){
          if (results.error){
            this.searchResult_artist = []; 
            console.log("not found");
          } else {
             this.searchResult_artist = results.artists.items;
          }
        } else {
           if (results.error){
            this.searchResult_track = []; 
            console.log("not found");
          } else {
             this.searchResult_track = results.tracks.items;
          }
        }
      }
    )
  }

  changeSearchTypeToArtist(){
    this.type_artist = true; 
  }

  changeSearchTypeToTrack(){
    this.type_artist = false; 
  }



}
