import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CreateNewQuestionButton from './CreateNewQuestionButton';



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
        <Text>{this.props.navigation.state.params.deck.title}</Text>
        <Text>{this.props.navigation.state.params.deck.cards.length}</Text>
        <CreateNewQuestionButton title={this.props.navigation.state.params.deck.title}/>
      </View>
    )
  }
}

export default DeckView;