import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CreateNewQuestionButton from './button/CreateNewQuestionButton';
import StartQuizButton from './button/StartQuizButton';



class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck.title
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.deckInfoView}>
          <Text style={styles.deckTitleText}>Title: {this.props.navigation.state.params.deck.title}</Text>
          <Text style={styles.deckCardsText}>Cards: {this.props.navigation.state.params.deck.cards.length}</Text>
        </View>
        <StartQuizButton
          navigation={this.props.navigation}
          title={this.props.navigation.state.params.deck.title}
          moreThanOneCard={this.props.navigation.state.params.deck.cards.length > 0}
        />
        <CreateNewQuestionButton
          navigation={this.props.navigation}
          title={this.props.navigation.state.params.deck.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckInfoView : {
    height: 60,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckTitleText: {
    color: 'white',
    fontSize: 22,
  },
  deckCardsText: {
    color: 'black',
    fontSize: 18,
  }
})

export default DeckView;