import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class ViewDeckButton extends Component {

  render() {
    return (
      <TouchableOpacity
      key={this.props.deck.title}
      style={styles.viewDeckButton}
      onPress={() => {
        this.props.navigation.navigate(
          'DeckView',
          { deck: this.props.deck }
        )
      }}>
        <Text style={styles.deckTitleText}>{this.props.deck.title}</Text>
        <Text style={styles.deckCardsText}>Cards: {this.props.deck.cards.length}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  viewDeckButton: {
    height: 60,
    margin: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckTitleText: {
    color: 'white',
    fontSize: 22,
  },
  deckCardsText: {
    color: 'grey',
    fontSize: 18,
  }
  
})

export default ViewDeckButton;