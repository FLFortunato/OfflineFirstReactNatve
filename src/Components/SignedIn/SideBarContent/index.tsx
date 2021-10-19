import React from 'react';
import { Button } from 'react-native';
import { ButtonView, Container } from './styles';

export const SideBarContent = ({ props }: any) => {
  const { navigate } = props.navigation;
  const contents = [
    { route: 'Digimons', title: 'Digimons', func: navigate },
    { route: 'Pokemons', title: 'Pokemons', func: navigate },
    { route: 'Home', title: 'Home', func: navigate },
  ];
  return (
    <Container>
      {contents.map((content, index) => (
        <ButtonView key={index}>
          <Button title={content.title} onPress={() => content.func(content.route)} />
        </ButtonView>
      ))}
    </Container>
  );
};
