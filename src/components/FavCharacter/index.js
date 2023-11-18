import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {removeFavCharacter} from '../../store/favCharacters/FavoriteSlice';

const FavCharacter = props => {
  const dispatch = useDispatch();

  const onRemovePressed = id => {
    dispatch(removeFavCharacter(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <TouchableOpacity onPress={() => onRemovePressed(props.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavCharacter;
