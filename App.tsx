import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { DrawerNavigator } from './src/Navigation/DrawerNavigator';
import AppStore from './src/Redux/reduxConfig';

declare global {
  interface Console {
    tron: any;
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#429c99',
    accent: '#161614',
  },
};
const App = () => {
  const store = AppStore;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <DrawerNavigator />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
