const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {

  if (action.type === 'increment'){
    return{
      counter: state.counter  + 1
    };
  }

  if (action.type === 'decrement'){
    return{
      counter: state.counter  - 1 
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counerSubscriber = () => {
  const latestsState =store.getState();
  console.log(latestsState)
};

store.subscribe(counerSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
