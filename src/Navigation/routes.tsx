import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DigimonScreen from '../Components/SignedIn/Digimon';
import HomeScreen from '../Components/SignedIn/Home/Home';
import PokemonScreen from '../Components/SignedIn/Pokemon';
import RegisterScreen from '../Components/SignedOut/Register';
import LogInScreen from '../Components/SignedOut/SignIn';

const Stack = createStackNavigator();

export const Stacks = () => {
  return (
    <Stack.Navigator
      mode='card'
      headerMode='none'
      initialRouteName='Login'
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name={'Login'} component={LogInScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Digimons'} component={DigimonScreen} />
      <Stack.Screen name={'Pokemons'} component={PokemonScreen} />
    </Stack.Navigator>
  );
};
