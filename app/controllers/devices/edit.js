import deviceNewController from './new';

export default deviceNewController.extend({
    actions: {
        update() {
            this.actions.create.call(this);
        }
    }
});
