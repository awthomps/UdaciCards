import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ViewDeckButton from './button/ViewDeckButton'
import { getDecks } from '../actions'
import { connect } from 'react-redux';

class DeckList extends Component {

  state = {
    decks: {}
  }

  // fetchDecks = () => {
  //   API.fetchDecks()
  //   .then((keyValueDecks) => {
  //     let tempDecks = Object.keys(keyValueDecks).map((key) => {
  //       return {
  //         key: key,
  //         title: keyValueDecks[key].title,
  //         cards: keyValueDecks[key].cards,
  //       }
  //     });
      
  //     this.setState({
  //       decks: tempDecks,
  //     });
  //   });
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()(dispatch);
  }

  // componentWillReceiveProps() {
  //   //TODO: this needs to be called on a focus or will focus
  //   this.fetchDecks();
  // }

  render() {
    return (
      <View style={styles.deckTitleList}>
        <FlatList
          data={this.props.decks}
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
    backgroundColor: 'red',
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

function mapStateToProps (keyValueDecks) {
  let decks = Object.keys(keyValueDecks).map((key) => {
    return {
      key: key,
      title: keyValueDecks[key].title,
      cards: keyValueDecks[key].cards,
    }
  });
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckList);