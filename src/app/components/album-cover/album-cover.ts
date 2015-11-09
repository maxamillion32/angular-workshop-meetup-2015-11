import {Component} from 'angular2/angular2';
import {Router} from 'angular2/router';

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

  constructor(private router: Router) {
  }

  open() {
    this.router.navigate(['Tracks', { album_id: this.album.id }]);
  }
}
