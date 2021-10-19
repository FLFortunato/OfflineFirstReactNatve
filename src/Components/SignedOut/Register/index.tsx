import React from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { EMAIL_REGEX } from '../../../Common/emailRegEx';
import { FormInput } from '../../../Shared/Inputs/input';
import LoginImage from '../../../Assets/loginImage.png';
import { MainRegisterView } from './styles';

type RegisterFieldsType = {
  name: string;
  isRequired: boolean;
  pattern?: any;
};
const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: RegisterFieldsType) => console.tron.log(data);

  const registerFields: RegisterFieldsType[] = [
    { name: 'E-mail', isRequired: true, pattern: EMAIL_REGEX },
    { name: 'Password', isRequired: true },
    { name: 'Confirm Password', isRequired: true },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <MainRegisterView>
        <View style={{ alignItems: 'center' }}>
          <Image source={LoginImage} />
        </View>
        <View>
          {registerFields.map((field) => {
            return (
              <FormInput
                key={field.name}
                control={control}
                name={field.name}
                errors={errors}
                rules={{
                  required: { value: field.isRequired, message: `Field "${field.name}" is required` },
                  pattern: { value: field.pattern, message: 'Not a valid e-mail' },
                }}
              />
            );
          })}
          <Button style={{ marginVertical: 12 }} mode={'contained'} onPress={handleSubmit(onSubmit)}>
            Register
          </Button>
        </View>
      </MainRegisterView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
