import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from './Root';
// import {Provider} from 'react-redux';
// import {store} from './redux';
// offerletter , payslip ----employee detail
const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
