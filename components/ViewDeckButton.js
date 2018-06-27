import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class ViewDeckButton extends Component {

  render() {
    return (
      <TouchableOpacity 
      key={this.props.title}
      style={styles.viewDeckButton}
      onPress={() => this.props.navigation.navigate(
        'DeckView',
        { title: this.props.title }
      )}>
        <Text style={styles.deckTitleText}>{this.props.title}</Text>
        <Text style={styles.deckCardsText}>Cards: {this.props.size}</Text>
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