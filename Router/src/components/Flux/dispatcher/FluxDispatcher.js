// Flux test dispatcher with actions respondeing
// to both view and server actions

import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {
  handleAction(action) {
    this.dispatch(
      {
        type: action.type,
        payload: action.payload,
      }
  );
  }
}

const FluxDispatcher = new DispatcherClass();

export { FluxDispatcher as default };
