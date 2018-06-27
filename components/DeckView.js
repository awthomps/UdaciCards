import React, { Component } from 'react';
import { View, Text } from 'react-native';



class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck.title
    }
  }
  render() {
    return (
      <View>
        <Text>This is a DeckView</Text>
      </View>
    )
  }
}

export default DeckView;