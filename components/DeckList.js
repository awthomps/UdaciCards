import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ViewDeckButton from './ViewDeckButton'
import * as API from '../utils/api'

class DeckList extends Component {
  state = {
    decks: []
  }

  componentDidMount() {
    API.fetchDecks()
    .then((keyValueDecks) => {
      let tempDecks = Object.keys(keyValueDecks).map((key) => {
        debugger
        return {
          key: key,
          title: keyValueDecks[key].title,
          size: keyValueDecks[key].cards.length,
        }
      });
      
      this.setState({
        decks: tempDecks,
      });
    });
  }

  render() {


    return (
      <View style={styles.deckTitleList}>
        <FlatList
          data={this.state.decks}
          renderItem={({item}) => <ViewDeckButton navigation={this.props.navigation} {...item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckTitleList: {
    flex: 1,
    justifyContent: 'flex-start',
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