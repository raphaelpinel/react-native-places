import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const PlaceInput = props => {
  return (
    <TextInput
      style={styles.placeInput}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  placeInput: {
    width: '70%'
  }
});

export default PlaceInput;
