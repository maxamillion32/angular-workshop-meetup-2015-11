import {Component, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AlbumsPage} from './components/albums-page/albums-page';
import {TracksPage} from './components/tracks-page/tracks-page';

@RouteConfig([
  {
    path: '/',
    component: AlbumsPage
  },
  {
    path: '/:album_id',
    as: 'Tracks',
    component: TracksPage
  }
])
@Component({
  selector: 'music-app',
  providers: [],
  templateUrl: 'app/music.html',
  styleUrls: ['app/music.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class MusicApp {

  constructor() {}

}
