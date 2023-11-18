import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const DetailTitle = props => {
  return (
    <View>
      <Text style={styles.title}>
        {props.isComics ? props.detail[0].title : props.detail[0].name}
      </Text>
      {(props.detail[0]?.description != '' ||
        props.detail[0]?.description != null) && (
        <Text>{props.detail[0].description}</Text>
      )}
    </View>
  );
};

export default DetailTitle;
