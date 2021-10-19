import React, { useEffect, useState } from 'react';
import { PokemonModel } from '../../../Apis/Database/Models/pokemon.model';
import { PokemonQuery } from '../../../Apis/Database/Queries/pokemon.query';
import FlatListWithFilter from '../../../Shared/FlatListWithFilter/flatListWithFilter';
import { Container } from '../../../Shared/globalStyledComponents';
import { Header } from '../../../Shared/Header';
import PokemonComponent from '../../../Shared/MonsterCard/monster-card';

const PokemonScreen = (props) => {
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);

  useEffect(() => {
    setPokemons(PokemonQuery.list() as any);
  }, []);

  return (
    <Container>
      <Header props={{ title: 'Pokemons', ...props }} />
      <FlatListWithFilter
        dataToBeRendered={pokemons}
        Component={PokemonComponent}
        cardClick={() => console.tron.log('opa')}
        keyExtractor={'name'}
        itemProperties={[{ name: 'name' }, { image: 'url' }]}
      />
    </Container>
  );
};

export default PokemonScreen;
