/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 3000);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Spalsh Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
