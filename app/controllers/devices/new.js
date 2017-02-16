import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        create() {
            console.log(this.get('typeId'));
            this.get('store').findRecord('deviceType', this.get('typeId')).then((type) => {
                this.set('model.device.type', type);
                this.get('model.device').save().then(() =>
                    this.transitionToRoute('devices.settings.edit', this.get('model.device'))
                );
            });
        }
    }
});
