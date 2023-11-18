import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const DetailSeriesCount = props => {
  return (
    <>
      {!props.isComics && (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.titleText}>Series Count: </Text>
            <Text>{props.detail[0].series.available}</Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.titleText}>Comics Count: </Text>
            <Text>{props.detail[0].comics.available}</Text>
          </View>
        </>
      )}
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>Stories Count: </Text>
        <Text>{props.detail[0].stories.available}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>Events Count: </Text>
        <Text>{props.detail[0].events.available}</Text>
      </View>
    </>
  );
};

export default DetailSeriesCount;
