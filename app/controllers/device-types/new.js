import Ember from 'ember';

export default Ember.Controller.extend({
    controls: [],
    control: Ember.computed('controls', function() {
        let controls = this.get('controls');
        return controls[controls.length - 1];
    }),

    init() {
        this._super();
        this._addControl();
    },

    _addControl() {
        this.get('controls').pushObject({
            control: this.get('store').createRecord('control'),
            typeId: "0"
        });
    },

    actions: {
        create() {
            let saveControls = [];
            this.get('controls').forEach(control =>
                this.get('store').findRecord('controlType', control.typeId).then(controlType => {
                    control.control.set('type', controlType);
                    saveControls.push(control.control.save().then(() => {}, error => console.error('ops', error.errors)));
                })
            );

            Ember.RSVP.all(saveControls).then(() => {
                this.set('model.controls', this.get('controls').map(control => control.control));
                this.get('model').save();
            });
        },

        addControl() {
            this._addControl();
        }
    }
});
