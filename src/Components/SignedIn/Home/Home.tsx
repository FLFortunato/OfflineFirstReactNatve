import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types';
import React from 'react';
import { RandomPhotosQuery } from '../../../Apis/Database/Queries/randomPhotos.query';
import { Header } from '../../../Shared/Header';
import { HomeMainView } from './styles';

const HomeScreen = (headerProps: DrawerHeaderProps) => {
  return (
    <HomeMainView>
      <Header props={headerProps} />
    </HomeMainView>
  );
};

export default HomeScreen;
