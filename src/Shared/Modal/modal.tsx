import React from 'react';
import Modal from 'react-native-modal';
import { AppModalContainer, AppModalView, ButtonText, ButtonTouchableOpacity, ButtonView } from './styles';

const AppModal = ({ isModalVisible, setModalVisible, children }) => {
  return (
    <AppModalContainer>
      <Modal isVisible={isModalVisible}>
        <AppModalView>
          {children}
          <ButtonView>
            <ButtonTouchableOpacity onPress={setModalVisible}>
              <ButtonText>Fechar</ButtonText>
            </ButtonTouchableOpacity>
          </ButtonView>
        </AppModalView>
      </Modal>
    </AppModalContainer>
  );
};

export default AppModal;
