import React, { Component } from 'react';
import { View, Text } from 'react-native';



class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title
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