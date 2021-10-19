import styled from 'styled-components/native';

export const AppModalContainer = styled.View({
  flex: 1,
});

export const AppModalView = styled.View((props) => ({
  borderRadius: 10,
  flex: 1,
  maxHeight: 400,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ButtonView = styled.View({
  position: 'absolute',
  bottom: 0,
  width: '80%',
});

export const ButtonTouchableOpacity = styled.TouchableOpacity({
  backgroundColor: '#429c99',
  borderRadius: 20,
  padding: 10,
  marginVertical: 15,
  alignItems: 'center',
});

export const ButtonText = styled.Text({
  color: 'white',
});
