import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('one');
  this.route('two');
  this.route('three');
  this.route('four');
  this.route('five');
  this.route('six');
  this.route('seven');
  this.route('eight');
  this.route('nine');
  this.route('ten');
  this.route('eleven');
  this.route('twelve');
  this.route('thirteen');
  this.route('fourteen');
  this.route('fifteen');
});

export default Router;
