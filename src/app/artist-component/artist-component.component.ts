import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Artist} from '../searchType/Artist'; 
import {Album} from '../searchType/Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-component',
  templateUrl: './artist-component.component.html',
  styleUrls: ['./artist-component.component.css']
})
export class ArtistComponentComponent implements OnInit {

  id: string; 
  artist: Artist[]; 
  albums: Album[]; 

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .map(params => params['id'])
    .subscribe(id => {
        this.id = id; 
        this.spotifyService.getArtist(this.id)
        .subscribe(
        artist=>{
            this.artist = artist;
        })
        this.spotifyService.getAlbums(this.id)
        .subscribe(
        albums=>{
            this.albums = albums.items;
        })
    })
  }

}
