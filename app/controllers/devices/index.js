import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        destroy(device) {
            if(window.confirm(`Are you sure you want to delete ${device.get('name')}?`)) {
                device.destroyRecord();
            }
        }
    }
});
