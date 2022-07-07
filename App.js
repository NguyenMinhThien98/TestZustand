import React from 'react';
import {Provider} from 'react-redux';
import AppInit from './src/app/index';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppInit />
    </Provider>
  );
};

export default App;

