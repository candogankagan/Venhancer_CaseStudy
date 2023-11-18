import {Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Creators = props => {
  return (
    <>
      <Text style={styles.title}>Creators</Text>
      {props.relatedCreators.map(item => (
        <Text key={item.id}>{item.fullName}</Text>
      ))}
    </>
  );
};

export default Creators;
