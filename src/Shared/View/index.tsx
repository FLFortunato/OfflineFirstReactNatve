import React from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Container } from './styles';

export const MainView = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
    </Container>
  );
};
