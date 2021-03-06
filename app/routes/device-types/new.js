import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('deviceType');
    },

    setupController(controller) {
        this._super(...arguments);
        controller.set('controls', []);
        controller._addControl();
    },

    actions: {
        willTransition() {
            if(this.currentModel.get('isNew') && !this.currentModel.get('isSaving')) {
                this.currentModel.destroyRecord().then(() => this._super(...arguments));
            } else {
                this._super(...arguments);
            }
        }
    }
});
