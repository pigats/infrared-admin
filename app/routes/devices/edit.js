import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            device: this.store.findRecord('device', params.device_id),
            types: this.store.findAll('deviceType')
        });
    },

    setupController(controller, model) {
        if(!model.device) {
            this.model({ device_id: model.id }).then((model) => {
                controller.set('model', model);
                controller.set('typeId', model.device.get('type.id'));
            });
        } else {
            this._super(...arguments);
        }
    }
});
