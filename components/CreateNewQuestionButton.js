import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CreateNewQuestionButton extends Component {

  render() {
    return (
      <TouchableOpacity
      key={this.props.title}
      style={styles.viewQuestionButton}
      onPress={() => {
        debugger
        this.props.navigation.navigate(
          'NewQuestionView',
          { title: this.props.title }
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
  return {deck: keyValueDecks[props.navigation.state.params.title]};

}

export default connect(
  mapStateToProps,
)(CreateNewQuestionButton);