import {Component,NgFor} from 'angular2/angular2';
import {AlbumCover} from '../album-cover/album-cover';
import {Http} from 'angular2/http';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/components/albums-page/albums-page.html',
  styleUrls: ['app/components/albums-page/albums-page.css'],
  providers: [],
  directives: [NgFor,AlbumCover],
  pipes: []
})
export class AlbumsPage {
  albums: any = [];

  constructor(private http: Http) {
    http
      .get('/albums.json')
      .map(response => response.json()["albums"])
      .subscribe(albums => this.albums = albums);
  }

}
