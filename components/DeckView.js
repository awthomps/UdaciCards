import React, { Component } from 'react';
import { View, Text } from 'react-native';



class DeckView extends Component {

  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.title}</Text>
      </View>
    )
  }
}

export default DeckView;