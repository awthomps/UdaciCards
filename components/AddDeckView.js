import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



class AddDeckView extends Component {

  state = {
    deckTitle: '',
    deckNameInvalidMessage: '',
  }

  changeTitle = (input) => {
    this.setState({
      deckTitle: input,
      deckNameInvalidMessage: input
    })
  }

  render() {
    return (
    <View>
      <FormLabel>Deck Title</FormLabel>
      <FormInput onChangeText={this.changeTitle}/>
      <FormValidationMessage></FormValidationMessage>
      {
        this.state.deckTitle
        ?  <TouchableOpacity style={styles.createButton}>
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

export default AddDeckView;