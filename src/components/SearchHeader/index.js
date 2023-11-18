import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const SearchHeader = props => {
  const navigation = useNavigation();

  const onBackPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPressed}>
        <Image
          style={styles.image}
          source={require('../../assets/left-arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={props.onChangeText}
          value={props.text}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
