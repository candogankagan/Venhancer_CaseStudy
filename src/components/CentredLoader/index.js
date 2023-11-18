import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const CenteredLoader = props => {
  return (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator color={props.loaderColor} />
    </View>
  );
};

CenteredLoader.defaultProps = {
  loaderColor: '#000',
};

export default CenteredLoader;
