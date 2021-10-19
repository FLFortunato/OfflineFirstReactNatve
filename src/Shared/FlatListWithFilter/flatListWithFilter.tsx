import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatListWithFilterFinalIconView,
  FlatListWithFilterIconView,
  FlatListWithFilterMainView,
  FlatListWithFilterTextInput,
} from './styles';

type FlatListwithFilter = {
  Component: any;
  cardClick: (args?: any) => void;
  dataToBeRendered: any[];
  keyExtractor: string;
  itemProperties: any;
};

const FlatListWithFilter = ({
  Component,
  cardClick,
  dataToBeRendered,
  keyExtractor,
  itemProperties,
}: FlatListwithFilter) => {
  const [data, setData] = useState<any>([]);
  const [filter, setFilter] = useState<string>('');
  const [displayedData, setDisplayedData] = useState<any[]>([]);

  const handleSearch = useCallback(() => {
    if (filter) {
      const filtered = data.filter((item) =>
        item.name.toUpperCase().includes(filter.toUpperCase())
      );
      setDisplayedData(filtered);
    } else {
      setDisplayedData(data);
    }
  }, [filter, data]);

  const eraseFilter = () => {
    setFilter('');
  };

  useEffect(() => {
    if (!filter) {
      setDisplayedData(data);
    }
  }, [filter, data]);

  useEffect(() => {
    setData(dataToBeRendered);
  }, [dataToBeRendered]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <FlatListWithFilterMainView>
        <FlatListWithFilterTextInput
          placeholder={'Pesquisar Digimon'}
          onChangeText={setFilter}
          value={filter}
        />
        <TouchableOpacity onPress={eraseFilter}>
          <FlatListWithFilterIconView>
            <Icon name='eraser' size={20} color={'white'} />
          </FlatListWithFilterIconView>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearch}>
          <FlatListWithFilterFinalIconView>
            <Icon name='search' size={20} color={'white'} />
          </FlatListWithFilterFinalIconView>
        </TouchableOpacity>
      </FlatListWithFilterMainView>
      <FlatList
        keyExtractor={(item) => `${item[keyExtractor]}`}
        data={displayedData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => cardClick(item)}>
              <Component props={{ item, itemProperties }} />
            </TouchableOpacity>
          );
        }}
      />
    </TouchableWithoutFeedback>
  );
};
export default FlatListWithFilter;
