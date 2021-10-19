import React from 'react';
import { Text } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export const GlobalLoading = ({
  isVisible,
  status,
}: {
  isVisible: boolean;
  status: any;
}) => {
  return (
    <AnimatedLoader
      visible={isVisible}
      overlayColor='white'
      source={require('../../Assets/Loading/loading.json')}
      speed={1}
      animationStyle={{
        width: 400,
        height: 400,
      }}
    >
      <Text>{status?.description}</Text>
      <Text>{status?.percentage}</Text>
    </AnimatedLoader>
  );
};
