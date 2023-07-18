import Route from '@ember/routing/route';
import Monster from '../models/debug'; //import to invoke debug code ¯\_(ツ)_/¯

export default class MainRoute extends Route {
  beforeModel() {
    console.log('end ');
  }
}
