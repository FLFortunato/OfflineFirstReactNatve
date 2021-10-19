import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import LoginImage from '../../../Assets/loginImage.png';
import { EMAIL_REGEX } from '../../../Common/emailRegEx';
import { GlobalLoading } from '../../../Shared/GlobalLoading';
import { FormInput } from '../../../Shared/Inputs/input';
import { getItem } from '../../../Shared/Utils/AsyncStorageFunctions';
import { MainView } from '../../../Shared/View';
import { triggerSyncService } from '../../../Store/Sync/actions';
import { loginUserRequest } from '../../../Store/User/actions';
import {
  FingerPrintTouchable,
  ImageView,
  LoginBottomText,
  LoginBtn,
} from './styles';

type RegisterFieldsType = {
  name?: string;
  label?: string;
  isRequired: boolean;
  pattern?: any;
  isPassword?: boolean;
};

const LogInScreen = ({ props }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLogged } = useSelector((state: ReduxState) => state.UsersState);
  const { loading, status } = useSelector(
    (state: ReduxState) => state.SyncStatusState
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fields: RegisterFieldsType[] = [
    { name: 'email', label: 'E-mail', isRequired: true, pattern: EMAIL_REGEX },
    { name: 'password', label: 'Password', isRequired: true, isPassword: true },
  ];

  const onSubmit = useCallback(
    (data: RegisterFieldsType) => {
      dispatch(loginUserRequest(data));
    },
    [dispatch]
  );

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (isLogged) {
      dispatch(triggerSyncService({ navigation, dispatch }));
    }
    const isFinished = getItem('finishedSyncing');
    if (isFinished === 'true') {
      navigation.navigate('Home');
    }
  }, [dispatch, isLogged, navigation]);

  return (
    <MainView>
      {loading ? (
        <GlobalLoading isVisible={loading} status={status} />
      ) : (
        <View>
          <ImageView>
            <Image source={LoginImage} />
          </ImageView>
          <View>
            {fields.map(
              ({ isPassword, label, name, isRequired, pattern }, index) => (
                <FormInput
                  key={index}
                  secureTextEntry={isPassword}
                  label={label || ''}
                  control={control}
                  name={name}
                  errors={errors}
                  rules={{
                    required: {
                      value: isRequired,
                      message: `Field "${label}" is required`,
                    },
                    pattern: {
                      value: pattern,
                      message: 'Not a valid e-mail',
                    },
                  }}
                />
              )
            )}
          </View>
          <View>
            <LoginBtn>
              <Button mode={'contained'} onPress={handleSubmit(onSubmit)}>
                Login
              </Button>
            </LoginBtn>
            <LoginBottomText>
              <TouchableOpacity onPress={goToRegisterScreen}>
                <Text>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Forgot Password</Text>
              </TouchableOpacity>
            </LoginBottomText>
            <FingerPrintTouchable>
              <FontAwesomeIcon
                color={'#429c99'}
                size={80}
                icon={faFingerprint}
              />
            </FingerPrintTouchable>
          </View>
        </View>
      )}
    </MainView>
  );
};

export default LogInScreen;
