import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckList extends Component {
  state = {
    decks: [
      {
        title: 'Basic Japanese',
        size: '20',
      },
      {
        title: 'React',
        size: '50',
      }
    ]
  }
  render() {
    return (
      <View style={styles.deckTitleList}>
        {
          this.state.decks.map((deck) => {
            return (
              <View key={'title_' + deck.title} style={styles.deckTitle}>
                <Text style={styles.deckTitleText}>{deck.title}</Text>
                <Text style={styles.deckTitleText}>Cards: {deck.size}</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckTitleList: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  deckTitle: {
    height: 60,
    margin: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  deckTitleText: {
    color: 'white',
    fontSize: 22,
  },
  
})

export default DeckList;