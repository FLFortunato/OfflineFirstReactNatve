import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Digimon } from '../../../Apis/Database/Models/digimon.model';
import { digimonQuery } from '../../../Apis/Database/Queries/digimon.query';
import FlatListWithFilter from '../../../Shared/FlatListWithFilter/flatListWithFilter';
import { Header } from '../../../Shared/Header';
import AppModal from '../../../Shared/Modal/modal';
import DigimonCard from '../../../Shared/MonsterCard/monster-card';

const DigimonScreen = (props: any) => {
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  useEffect(() => {
    setDigimons(digimonQuery.list() as any);
  }, []);

  const handleClick = (item?: any) => {
    setModalVisible(true);
    setSelectedItem(item);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Header props={{ title: 'Posts', ...props }} />
      <View style={{ height: '92%' }}>
        <FlatListWithFilter
          Component={DigimonCard}
          dataToBeRendered={digimons?.sort((a, b) =>
            a.name.localeCompare(b.name)
          )}
          keyExtractor={'name'}
          cardClick={handleClick}
          itemProperties={[
            { name: 'name' },
            { level: 'level' },
            { image: 'img' },
          ]}
        />
      </View>

      <AppModal
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(!isModalVisible)}
      >
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              bottom: 20,
            }}
          >
            {selectedItem?.name}
          </Text>
          <Image
            source={{ uri: selectedItem?.img }}
            style={{ height: 250, width: 250 }}
          />
        </View>
      </AppModal>
    </TouchableWithoutFeedback>
  );
};
export default DigimonScreen;
