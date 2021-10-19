import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const FlatListWithFilterMainView = styled.View({
  flexDirection: 'row',
  marginTop: 10,
  justifyContent: 'center',
});

export const FlatListWithFilterTextInput = styled.TextInput({
  backgroundColor: 'white',
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  padding: 10,
  borderColor: 'blue',
  borderWidth: 1,
  width: (windowWidth * 65) / 100,
});

export const FlatListWithFilterIconView = styled.View({
  backgroundColor: 'blue',
  width: (windowWidth * 15) / 100,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
});

export const FlatListWithFilterFinalIconView = styled.View({
  backgroundColor: 'blue',
  width: (windowWidth * 15) / 100,
  height: 50,
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
});
