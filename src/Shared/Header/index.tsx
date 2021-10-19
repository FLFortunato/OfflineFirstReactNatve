import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, HeaderTitle, MainView } from './styles';

interface Props {
  title: string;
  goBack: Function;
}
export const Header = ({ props }: any) => {
  const { title, goBack, navigation } = props;
  const openDrawer = navigation.openDrawer;
  const [leftIcon, setLeftIcon] = useState<any>(faBars);
  const [goBackOrOpenDrawer, setGoBackOrOpenDrawer] = useState<any>(() => {
    openDrawer;
  });

  useEffect(() => {
    if (props.route.name === 'Home') {
      setLeftIcon(faBars);
      setGoBackOrOpenDrawer(() => openDrawer);
    } else {
      setLeftIcon(faArrowLeft);
      setGoBackOrOpenDrawer(() => navigation.goBack);
    }
  }, [props]);

  return (
    <Container>
      <MainView>
        <TouchableOpacity onPress={goBackOrOpenDrawer}>
          <View>
            <FontAwesomeIcon icon={leftIcon} color={'white'} size={25} />
          </View>
        </TouchableOpacity>
        <HeaderTitle>{title ?? ''}</HeaderTitle>
        <View>{null}</View>
      </MainView>
    </Container>
  );
};
