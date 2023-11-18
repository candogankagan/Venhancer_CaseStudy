import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const RelatedItem = props => {
  const navigation = useNavigation();

  const onItemPressed = () => {
    navigation.navigate(props.isComics ? 'CharacterDetail' : 'ComicDetail', {
      id: props.id,
    });
  };

  return props.isComics ? (
    <TouchableOpacity style={styles.container} onPress={onItemPressed}>
      {props.thumbnail?.path != undefined && (
        <Image
          style={styles.image}
          source={{
            uri: props.thumbnail.path + '.' + props.thumbnail.extension,
          }}
          resizeMode="stretch"
        />
      )}
      <Text style={styles.name} numberOfLines={2}>
        {props.name}
      </Text>
      <Text style={{marginTop: 5, fontSize: 12}} numberOfLines={2}>
        {props.description}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.container} onPress={onItemPressed}>
      {props?.images[0]?.path != undefined && (
        <Image
          style={styles.image}
          source={{
            uri: props.images[0].path + '.' + props.images[0].extension,
          }}
          resizeMode="stretch"
        />
      )}
      <Text style={styles.name} numberOfLines={2}>
        {props.title}
      </Text>
      <Text style={{marginTop: 5, fontSize: 12}} numberOfLines={2}>
        {props.description}
      </Text>
    </TouchableOpacity>
  );
};

export default RelatedItem;
