import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            device: this.store.createRecord('device'),
            types: this.store.findAll('deviceType')
        });
    },

    actions: {
        willTransition() {
            if(this.currentModel.device.get('isNew') && !this.currentModel.device.get('isSaving')) {
                this.currentModel.device.destroyRecord().then(() => this._super(...arguments));
            } else {
                this._super(...arguments);
            }
        }
    }
});
