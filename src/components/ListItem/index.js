import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const ListItem = props => {
  const navigation = useNavigation();

  const onItemPressed = () => {
    navigation.navigate(props.isComics ? 'ComicDetail' : 'CharacterDetail', {
      id: props.id,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPressed}>
      <Image
        style={styles.image}
        source={{
          uri: props.thumbnail.path + '.' + props.thumbnail.extension,
        }}
        resizeMode="stretch"
      />
      <View style={{flex: 1}}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Name: </Text>
          <Text style={styles.nameDescriptionText} numberOfLines={2}>
            {props.isComics ? props.title : props.name}
          </Text>
        </View>
        {(props.description != '' || props.description != null) && (
          <View style={styles.textContainer}>
            <Text style={styles.nameDescriptionText} numberOfLines={2}>
              {props.description}
            </Text>
          </View>
        )}
        {props.isComics ? (
          <View style={styles.textContainer}>
            <Text style={styles.title}>Page Count: </Text>
            <Text>{props.pageCount}</Text>
          </View>
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Total Cosmic: </Text>
              <Text>{props.comics.available}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Total Series: </Text>
              <Text>{props.series.available}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Total Stories: </Text>
              <Text>{props.stories.available}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
