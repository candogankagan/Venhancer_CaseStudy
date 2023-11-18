import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const Loader = () => {
  const spinnerVisible = useSelector(state => state.loader.loader);

  return (
    <Modal
      style={{zIndex: 99999}}
      animationType={'none'}
      onRequestClose={() => _handleOnRequestClose()}
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={spinnerVisible}
      statusBarTranslucent={true}>
      <View
        style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.45)'}]}
        key={`spinner_${Date.now()}`}>
        <View style={styles.background}>
          <ActivityIndicator
            color={'#000'}
            size={'small'}
            style={[styles.activityIndicator]}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
