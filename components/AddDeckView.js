import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { putDeck } from '../actions'



class AddDeckView extends Component {

  state = {
    deckTitle: '',
  }

  changeTitle = (input) => {
    this.setState({
      deckTitle: input,
    })
  }

  submitDeck = () => {
    const { dispatch } = this.props;
    let deck = {
      title: this.state.deckTitle,
      cards: []
    }

    postDispatch = () => {
      this.input.clearText();
      this.changeTitle('');
      this.props.navigation.navigate('DeckView',{ deck: deck });
    }
    putDeck({
      deck: deck,
      key : this.state.deckTitle,
    })(dispatch)(postDispatch);
  }

  render() {
    return (
    <View>
      <FormLabel>Deck Title</FormLabel>
      <FormInput onChangeText={this.changeTitle} ref={input => this.input = input}/>
      {
        this.state.deckTitle
        ?  <TouchableOpacity
        style={styles.createButton}
        onPress={this.submitDeck}
        >
            <Text style={styles.createButtonText}>Create New Deck</Text>
          </TouchableOpacity>
        : <Text></Text>
      }
     
    </View>
    )
  }
}

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 60,
  },
  createButtonText: {
    fontSize: 22,
    color: 'white'
  }
})

export default connect()(AddDeckView);
