import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('devices', function() {
    this.route('new');
    this.route('edit', { path: ':device_id/edit' });
    this.route('settings', { path: ':device_id/settings' }, function() {
        this.route('edit');
    });
  });

  this.route('device-types', function() {
    this.route('new');
    this.route('show', { path: ':deviceType_id' });
    this.route('edit', { path: ':deviceType_id/edit' });
  });
});

export default Router;
