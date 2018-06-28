import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux';
import { putDeck } from '../actions'



class NewQuestionView extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    let questionTitle = 'New Question: ' + title;
    return {
      title: questionTitle
    }
  }

  state = {
    question: '',
    answer: '',
  }

  changeQuestion = (questionInput) => {
    this.setState({
      question: questionInput,
    })
  }

  changeAnswer = (answerInput) => {
    this.setState({
      answer: answerInput,
    })
  }

  submitDeck = () => {
    debugger
    const { dispatch } = this.props;
    let deck = {
      title: this.props.title,
      cards: [ ...this.props.cards, { question: this.state.question, answer: this.state.answer } ],
    }
    debugger
    postDispatch = () => {
      debugger
      this.questionInput.clearText();
      this.answerInput.clearText();
      this.changeQuestion('');
      this.changeAnswer('');
      this.props.navigation.navigate('DeckView',{ deck: deck });
    }
    putDeck({
      deck: deck,
      key : this.props.title,
    })(dispatch)(postDispatch);
  }

  render() {
    return (
    <View>
      <FormLabel>Question</FormLabel>
      <FormInput onChangeText={this.changeQuestion} ref={questionInput => this.questionInput = questionInput}/>
      <FormLabel>Answer</FormLabel>
      <FormInput onChangeText={this.changeAnswer} ref={answerInput => this.answerInput = answerInput}/>
      {
        (this.state.question && this.state.answer)
        ?  <TouchableOpacity
        style={styles.createButton}
        onPress={this.submitDeck}
        >
            <Text style={styles.createButtonText}>Create New Question</Text>
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

function mapStateToProps (keyValueDecks, props) {
  let deck = keyValueDecks[props.navigation.state.params.title];
  return {title: props.navigation.state.params.title, cards: deck.cards};
}

export default connect(mapStateToProps)(NewQuestionView);
