import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('device-types', function() {
    this.route('new');
    this.route('show', { path: ':deviceType_id' });
    this.route('edit', { path: ':deviceType_id/edit' });
  });
});

export default Router;
