import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk  from 'redux-thunk';

import PlacesNavigation from './navigation/PlacesNavigation';
import placesReducer from './store/placesReducer';
import { init } from './helpers/db';

init().then(() => {
  console.log('Initializing database');
}).catch(err => {
  console.log('Initializing db failed');
  console.log(err);
});

const rootReducers = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducers, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigation />
    </Provider>
  );
}
