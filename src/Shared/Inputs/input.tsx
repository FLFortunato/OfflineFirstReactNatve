import React, { useEffect, useState } from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ErrorText } from './styles';

interface FormInputTypes extends TextInputProps {
  name: any;
  errors: any;
  control: any;
  rules?: RegisterOptions;
  disabled?: boolean;
}
export const FormInput = ({
  name,
  errors,
  control,
  rules,
  disabled,
  secureTextEntry,
  ...rest
}: FormInputTypes): any => {
  const styles = { ...(rest.style as any) };

  const [isPassword, setIsPassword] = useState<boolean>(secureTextEntry);

  return (
    <View style={{ marginVertical: 8 }}>
      <Controller
        control={control}
        rules={{ ...rules }}
        render={({ field: { onChange, onBlur, value, name } }) =>
          (
            <TextInput
              {...(rest as any)}
              style={{ ...styles, fontSize: styles.fontSize || 18 }}
              disabled={disabled}
              label={name}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode={'outlined'}
              secureTextEntry={isPassword}
              right={
                secureTextEntry && (
                  <TextInput.Icon
                    name={isPassword ? 'eye' : 'eye-off'}
                    onPress={() => setIsPassword(!isPassword)}
                  />
                )
              }
            />
          ) as any
        }
        name={name}
      />
      {errors[name] && <ErrorText>{errors[name]?.message}</ErrorText>}
    </View>
  );
};
