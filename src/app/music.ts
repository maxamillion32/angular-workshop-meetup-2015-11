import {Component, bootstrap} from 'angular2/angular2';
import {AlbumsPage} from './components/albums-page/albums-page';

@Component({
  selector: 'music-app',
  providers: [],
  templateUrl: 'app/music.html',
  styleUrls: ['app/music.css'],
  directives: [AlbumsPage],
  pipes: []
})
export class MusicApp {

  constructor() {}

}
