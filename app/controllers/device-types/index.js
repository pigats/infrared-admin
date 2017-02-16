import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        destroy(deviceType) {
            if(window.confirm(`Are you sure you want to delete ${deviceType.get('name')}?`)) {
                deviceType.destroyRecord();
            }
        }
    }
});
