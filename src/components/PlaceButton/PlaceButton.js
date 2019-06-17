import React from 'react';
import { StyleSheet, Button } from 'react-native';

const placeButton = props => {
  return (
    <Button
      style={StyleSheet.placeButton}
      onPress={props.onPress}
      title={props.title}
    />
  );
};

const styles = StyleSheet.create({
  placeButton: {
    width: '30%'
  }
});

export default placeButton;
