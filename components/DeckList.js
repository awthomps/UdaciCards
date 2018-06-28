import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ViewDeckButton from './ViewDeckButton'
import * as API from '../utils/api'

class DeckList extends Component {

  state = {
    decks: {}
  }

  fetchDecks = () => {
    API.fetchDecks()
    .then((keyValueDecks) => {
      let tempDecks = Object.keys(keyValueDecks).map((key) => {
        return {
          key: key,
          title: keyValueDecks[key].title,
          cards: keyValueDecks[key].cards,
        }
      });
      
      this.setState({
        decks: tempDecks,
      });
    });
  }

  componentDidMount() {
    this.fetchDecks();
  }

  componentWillReceiveProps() {
    //TODO: this needs to be called on a focus or will focus
    this.fetchDecks();
  }

  render() {
    return (
      <View style={styles.deckTitleList}>
        <FlatList
          data={this.state.decks}
          renderItem={({item}) => <ViewDeckButton navigation={this.props.navigation} deck={item}/>}
          ListEmptyComponent={<View style={styles.emptyTextView}>
              <Text style={styles.emptyText}>No Decks Present</Text>
            </View>}
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
  emptyTextView: {
    height: 60,
    margin: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 22,
  },
  deckCardsText: {
    color: 'grey',
    fontSize: 18,
  }
  
})

export default DeckList;