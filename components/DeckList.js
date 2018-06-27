import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'

class DeckList extends Component {
  state = {
    decks: [
      {
        key: 'Basic Japanese',
        title: 'Basic Japanese',
        size: '20',
      },
      {
        key: 'React',
        title: 'React',
        size: '50',
      },
      {
        key: 'React1',
        title: 'React1',
        size: '50',
      },
      {
        key: 'React2',
        title: 'React2',
        size: '50',
      },
      {
        key: 'React3',
        title: 'React3',
        size: '50',
      },
      {
        key: 'React4',
        title: 'React4',
        size: '50',
      },
      {
        key: 'React5',
        title: 'React5',
        size: '50',
      },
      {
        key: 'React6',
        title: 'React6',
        size: '50',
      },
      {
        key: 'React7',
        title: 'React7',
        size: '50',
      },
      {
        key: 'React8',
        title: 'React8',
        size: '50',
      },
      {
        key: 'React9',
        title: 'React9',
        size: '50',
      },
      {
        key: 'React10',
        title: 'React10',
        size: '50',
      },
      {
        key: 'React11',
        title: 'React11',
        size: '50',
      },
      {
        key: 'React12',
        title: 'React12',
        size: '50',
      },
    ]
  }
  render() {


    return (
      <View style={styles.deckTitleList}>
        <FlatList
          data={this.state.decks}
          renderItem={({item}) => <DeckButton {...item}/>}
        />
      </View>
    );
  }
}

function DeckButton ({key, title, size}) {
  return (
    <TouchableOpacity key={key} style={styles.deckTitle}>
      <Text style={styles.deckTitleText}>{title}</Text>
      <Text style={styles.deckCardsText}>Cards: {size}</Text>
    </TouchableOpacity>
  )
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
  deckCardsText: {
    color: 'grey',
    fontSize: 18,
  }
  
})

export default DeckList;