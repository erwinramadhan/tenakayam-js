import React, {useContext, useState} from 'react';

import {light} from '../constants';

const DataContext = React.createContext({});
const DataProvider = ({children}) => {
  const [theme, setTheme] = useState(light);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

const UseData = () => useContext(DataContext);

const GetContext = () => {
  return {
    DataContext,
    DataProvider,
    UseData,
  };
};

export default GetContext;
