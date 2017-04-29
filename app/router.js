import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('one', {path: '/1'});
  this.route('two', {path: '/2'});
  this.route('three', {path: '/3'});
  this.route('four', {path: '/4'});
  this.route('five', {path: '/5'});
  this.route('six', {path: '/6'});
  this.route('seven', {path: '/7'});
  this.route('eight', {path: '/8'});
  this.route('nine', {path: '/9'});
  this.route('ten', {path: '/10'});
  this.route('eleven', {path: '/11'});
  this.route('twelve', {path: '/12'});
  this.route('thirteen', {path: '/13'});
  this.route('fourteen', {path: '/14'});
  this.route('fifteen', {path: '/15'});
});

export default Router;
