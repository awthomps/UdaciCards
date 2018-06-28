import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CreateNewQuestionButton extends Component {

  render() {
    return (
      <TouchableOpacity
      key={this.props.deck.title}
      style={styles.viewQuestionButton}
      onPress={() => {
        this.props.navigation.navigate(
          'NewQuestionView',
          { title: this.props.deck.title }
        )
      }}>
        <Text style={styles.newQuestionText}>Add Card</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  viewQuestionButton: {
    height: 60,
    margin: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newQuestionText: {
    color: 'white',
    fontSize: 22,
  },
  
})

function mapStateToProps (keyValueDecks, props) {
  return {deck: keyValueDecks[props.title]};

}

export default connect(
  mapStateToProps,
)(CreateNewQuestionButton);