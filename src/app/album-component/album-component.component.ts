import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Album} from '../searchType/Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css']
})
export class AlbumComponentComponent implements OnInit {
  id: string; 
  album: Album; 
  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .map(params => params['id'])
    .subscribe(id => {
        this.id = id; 
        this.spotifyService.getAlbum(this.id)
        .subscribe(
        album=>{
            this.album = album;
        })
    })
  }

}
