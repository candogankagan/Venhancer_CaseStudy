import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Linking,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Requests from '../../api/services/requests';
import RelatedItem from '../../components/RelatedItem';
import {showLoader, hideLoader} from '../../store/loader/LoaderSlice';
import {useDispatch} from 'react-redux';
import DetailImage from '../../components/DetailImage';
import DetailTitle from '../../components/DetailTitle';
import DetailSeriesCount from '../../components/DetailSeriesCount';
import Button from '../../components/Button';
import Creators from '../../components/Creators';
import Spacer from '../../components/Spacer';

const ComicDetailScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  const [detail, setDetail] = useState([]);
  const [relatedCharacters, setRelatedCharacters] = useState([]);
  const [relatedCreators, setRelatedCreators] = useState([]);

  const onMarvelProfilePressed = async url => {
    await Linking.openURL(url);
  };

  useEffect(() => {
    const fetch = async () => {
      dispatch(showLoader());
      const detailResponse = await Requests.genericGet(
        `/v1/public/comics/${id}`,
      );
      const charactersResponse = await Requests.genericGet(
        `/v1/public/comics/${id}/characters`,
      );
      const creatorsResponse = await Requests.genericGet(
        `/v1/public/comics/${id}/creators`,
      );
      setDetail(detailResponse.results);
      setRelatedCharacters(charactersResponse.results);
      setRelatedCreators(creatorsResponse.results);
      dispatch(hideLoader());
    };
    fetch();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      {detail?.length > 0 && (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <DetailImage detail={detail} isComics={true} />
          <View style={styles.titleCountsContainer}>
            <DetailTitle detail={detail} isComics={true} />
            <DetailSeriesCount detail={detail} isComics={true} />
            <Button
              onPress={() => onMarvelProfilePressed(detail[0].urls[0].url)}
              title={'Marvel Profile'}
              styleOverrides={{
                container: styles.profileButtonContainer,
                title: styles.profileButtonText,
              }}
            />
            <Creators relatedCreators={relatedCreators} />
          </View>
          {relatedCharacters?.length > 0 && (
            <View>
              <Text style={styles.relatedItemTitle}>Related Characters</Text>
              <FlatList
                horizontal
                style={styles.flatlist}
                showsHorizontalScrollIndicator={false}
                data={relatedCharacters}
                renderItem={({item}) => (
                  <RelatedItem isComics={true} {...item} />
                )}
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

export default ComicDetailScreen;
