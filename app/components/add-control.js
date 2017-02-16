import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    selectOption: Ember.computed('selectOptions', function() {
        let selectOptions = this.get('selectOptions');
        return selectOptions[selectOptions.length - 1];
    }),

    init() {
        this._super();
        this.set('controlTypes', this.get('store').findAll('controlType'));
        this.set('selectOptions', this.get('control.control.values'));
    },

    actions: {
        addSelectOption() {
            this.get('selectOptions').pushObject({
                value: ''
            }); 
        },

        saveSelectOption(params) {
            this.get('control.control.values').pushObject({
                value: params
            });
        }

    }
});
