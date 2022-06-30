import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import GetContext from './src/context/Context';
import store, {persistor} from './src/store/store';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from './src/context/Theme';

const App = () => {
  const Context = GetContext();
  return (
    <Provider store={store}>
      <Context.DataProvider>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </PersistGate>
      </Context.DataProvider>
    </Provider>
  );
};

export default App;
