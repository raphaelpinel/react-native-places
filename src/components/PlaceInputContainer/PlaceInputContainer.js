import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from '../PlaceInput/PlaceInput';
import PlaceButton from '../PlaceButton/PlaceButton';

const PlaceInputContainer = props => {
  return (
    <View style={styles.placeInputContainer}>
      <PlaceInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
      <PlaceButton title={props.buttonTitle} onPress={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  placeInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default PlaceInputContainer;
