import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const WrapAllContent = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ImageView = styled.View({
  alignItems: 'center',
});

export const LoginBtn = styled.View({ marginVertical: 12 });

export const LoginBottomText = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const FingerPrintTouchable = styled.TouchableOpacity({
  alignItems: 'center',
  marginVertical: 40,
});
