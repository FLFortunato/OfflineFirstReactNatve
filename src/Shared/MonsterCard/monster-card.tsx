import React from 'react';
import { Text, View } from 'react-native';
import { DigimonData, DigimonImage, TouchableView } from './styles';

type DigimonProps = {
  props: {
    item: any;
    itemProperties: any;
  };
};
const DigimonCard = ({ props }: DigimonProps) => {
  const { item, itemProperties } = props;
  return (
    <TouchableView>
      <View>
        <DigimonImage
          source={{ uri: item[itemProperties.find((it) => it.image)?.image] }}
        />
      </View>
      <DigimonData>
        {itemProperties?.map((i, key) => {
          if (!i.hasOwnProperty('image')) {
            return <Text>Name: {item[i?.name]}</Text>;
          }
        })}
      </DigimonData>
    </TouchableView>
  );
};

export default DigimonCard;
