import {Component} from 'angular2/angular2';


@Component({
  selector: 'album-cover',
  templateUrl: 'app/components/album-cover/album-cover.html',
  styleUrls: ['app/components/album-cover/album-cover.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class AlbumCover {
  album: any;

  constructor() {
    this.album = {
      artist: 'Ramones',
      albumName: 'Ramones',
      image: '/images/ramones-ramones.jpg'
    };
  }

  open() {
    alert('Open ' + this.album.artist + ' - ' + this.album.albumName);
  }

}
