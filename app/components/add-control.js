import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),

    init() {
        this._super();
        this.set('controlTypes', this.get('store').findAll('controlType'));
    }
});
