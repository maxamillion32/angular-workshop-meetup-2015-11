import {Component} from 'angular2/angular2';


@Component({
  selector: 'album-cover',
  templateUrl: 'app/components/album-cover/album-cover.html',
  styleUrls: ['app/components/album-cover/album-cover.css'],
  providers: [],
  directives: [],
  pipes: [],
  properties: ['album']
})
export class AlbumCover {
  album: any;

  constructor() {
  }

  open() {
    alert('Open ' + this.album.artist + ' - ' + this.album.name);
  }

}
