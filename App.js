/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import PlaceInputContainer from './src/components/PlaceInputContainer/PlaceInputContainer';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      z;
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      };
    });
  };
  deleteItemHandler = i => {
    let places = [...this.state.places];
    places = [...places.slice(0, i), ...places.slice(i + 1)];
    this.setState({ places });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInputContainer
          placeholder="an awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          buttonTitle="Add"
          onPress={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.deleteItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  buttonInput: {
    width: '30%'
  }
});
