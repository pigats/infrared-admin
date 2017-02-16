import deviceTypesNewController from './new';

export default deviceTypesNewController.extend({
    actions: {
        update() {
            this.actions.create.call(this);
        }
    }
});
