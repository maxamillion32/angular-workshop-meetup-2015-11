import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class Store {

  constructor(private http: Http) {}

  allAlbums() {
    return this
      .http
      .get('/albums.json')
      .map(response => response.json()["albums"]);
  }
}
