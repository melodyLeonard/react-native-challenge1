/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import AppNavigator from './src/navigation';
import Theme from './src/global/index';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F3F3" />
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
