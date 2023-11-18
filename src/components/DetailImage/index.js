import {View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import Button from '../Button';
import {addFavCharacter} from '../../store/favCharacters/FavoriteSlice';

const DetailImage = props => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();

  const onBackPressed = () => {
    navigation.goBack();
  };

  const onFavPressed = item => {
    dispatch(addFavCharacter(item));
  };

  return (
    <View style={{height: height * 0.5}}>
      <Image
        style={styles.image}
        source={{
          uri:
            props.detail[0].thumbnail.path +
            '.' +
            props.detail[0].thumbnail.extension,
        }}
        resizeMode="stretch"
      />
      <Button
        onPress={onBackPressed}
        icon={
          <Image
            style={styles.icon}
            source={require('../../assets/left-arrow.png')}
          />
        }
        styleOverrides={{
          container: styles.backButtonContainer,
        }}
      />
      {!props.isComics && (
        <Button
          onPress={() => onFavPressed(props.detail[0])}
          title={'Add to favorite'}
          styleOverrides={{
            container: styles.addButtonContainer,
            title: styles.addButtonTextContainer,
          }}
        />
      )}
    </View>
  );
};

export default DetailImage;
