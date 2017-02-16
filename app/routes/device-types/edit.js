import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('deviceType', params.deviceType_id);
    },

    setupController(controller, model) {
        controller.set('model', model);
        model.get('controls').then((controls) => {
            controller.set('controls', controls.map(control => ({
                control: control,
                typeId: control.get('type.id')
            })));
        });
    }
});
