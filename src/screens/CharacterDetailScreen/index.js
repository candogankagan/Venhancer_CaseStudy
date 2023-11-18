import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Linking,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import Requests from '../../api/services/requests';
import RelatedItem from '../../components/RelatedItem';
import {showLoader, hideLoader} from '../../store/loader/LoaderSlice';
import Spacer from '../../components/Spacer';
import DetailImage from '../../components/DetailImage';
import DetailTitle from '../../components/DetailTitle';
import DetailSeriesCount from '../../components/DetailSeriesCount';
import Button from '../../components/Button';

const CharacterDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const [detail, setDetail] = useState([]);
  const [relatedComics, setRelatedComics] = useState([]);

  const onMarvelProfilePressed = async url => {
    await Linking.openURL(url);
  };

  useEffect(() => {
    const fetch = async () => {
      dispatch(showLoader());
      const detailResponse = await Requests.genericGet(
        `/v1/public/characters/${id}`,
      );
      const comicsResponse = await Requests.genericGet(
        `/v1/public/characters/${id}/comics`,
      );
      setDetail(detailResponse.results);
      setRelatedComics(comicsResponse.results);
      dispatch(hideLoader());
    };
    fetch();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      {detail?.length > 0 && (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <DetailImage detail={detail} />
          <View style={styles.titleCountsContainer}>
            <DetailTitle detail={detail} />
            <DetailSeriesCount detail={detail} />
            <Button
              onPress={() => onMarvelProfilePressed(detail[0].urls[0].url)}
              title={'Marvel Profile'}
              styleOverrides={{
                container: styles.profileButtonContainer,
                title: styles.profileButtonText,
              }}
            />
          </View>
          {relatedComics?.length > 0 && (
            <View>
              <Text style={styles.relatedItemTitle}>Related Comics</Text>
              <FlatList
                horizontal
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                data={relatedComics}
                renderItem={({item}) => <RelatedItem {...item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
          <Spacer vertical={30} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;
