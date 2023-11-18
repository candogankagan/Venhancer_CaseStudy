import {SafeAreaView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {debounce} from 'lodash';
import {styles} from './style';
import Spacer from '../../components/Spacer';
import ListItem from '../../components/ListItem';
import Requests from '../../api/services/requests';
import CenteredLoader from '../../components/CentredLoader';
import SearchHeader from '../../components/SearchHeader';

const ListScreen = ({route}) => {
  const [text, setText] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [showBottomLoader, setShowBottomLoader] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [offset, setOffset] = useState(0);

  const url = route.params?.isComics ? 'comics' : 'characters';

  const debouncedSearch = debounce(async text => {
    const params = route.params?.isComics
      ? {
          limit: 20,
          titleStartsWith: text == '' ? null : text,
        }
      : {
          limit: 20,
          nameStartsWith: text == '' ? null : text,
        };
    setIsLoading(true);
    const response = await Requests.genericGet(`/v1/public/${url}`, {
      params: params,
    });
    setCharacterList(response.results);
    setOffset(0);
    setIsLoading(false);
  }, 1000);

  useEffect(() => {
    debouncedSearch(text);
  }, [text]);

  useEffect(() => {
    if (offset !== 0) {
      const params = route.params?.isComics
        ? {
            offset: offset,
            limit: 20,
            titleStartWith: text == '' ? null : text,
          }
        : {
            offset: offset,
            limit: 20,
            nameStartsWith: text == '' ? null : text,
          };
      const fetch = async () => {
        setShowBottomLoader(true);
        const response = await Requests.genericGet(`/v1/public/${url}`, {
          params: params,
        });
        setCharacterList([...characterList, ...response.results]);
        setShowBottomLoader(false);
      };
      fetch();
    }
  }, [offset]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader text={text} onChangeText={setText} />
      {loading ? (
        <CenteredLoader />
      ) : (
        <FlatList
          data={characterList}
          ItemSeparatorComponent={() => <Spacer vertical={15} />}
          onEndReachedThreshold={0.5}
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd < 0) return;
            setOffset(offset + 20);
          }}
          renderItem={({item}) => (
            <ListItem isComics={route.params?.isComics} {...item} />
          )}
          ListFooterComponent={
            showBottomLoader && <CenteredLoader style={{marginVertical: 30}} />
          }
          keyExtractor={(item, index) => String(index)}
        />
      )}
    </SafeAreaView>
  );
};

export default ListScreen;
