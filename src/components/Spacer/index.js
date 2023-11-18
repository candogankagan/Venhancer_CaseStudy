import React from 'react';
import {View} from 'react-native';

const Spacer = props => (
  <View
    style={{
      height: props.vertical,
      width: props.horizontal,
      borderColor: props.borderColor,
      borderBottomWidth: props.borderBottomWidth,
      borderTopWidth: props.borderTopWidth,
      ...props.style,
    }}
  />
);

export default React.memo(Spacer);

Spacer.defaultProps = {
  borderBottomWidth: 0,
  borderTopWidth: 0,
};
