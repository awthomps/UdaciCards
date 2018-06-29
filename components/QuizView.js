import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from './../utils/helpers';


question = 'question';
answer = 'answer';
results = 'results';
resetState = {
  cardIndex: 0,
  score: 0,
  currentStep: question,
}

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title + ' Quiz'
    }
  }

  state = {
    ...resetState
  }

  resetState = {
    cardIndex: 0,
    score: 0,
    currentStep: question,
  }


  // Power State Machine with constants
  manageQuizStep(correctAnswer) {
    let nextStep = this.state.currentStep;
    let addScore = 0;
    let nextCard = this.state.cardIndex;
    switch(this.state.currentStep) {
      case question:
        nextStep = answer;
        break;
      case answer:
        if(correctAnswer) {
          addScore = 1;
        }
        nextCard++;

        // Has the end of the quiz been reached?
        if(nextCard >= this.props.cards.length) {
          nextCard--; // decrement to avoid any worst case oob errors.
          nextStep = results; // go to results screen state

          // Delay notification because today the user has quized
          clearLocalNotification()
            .then(setLocalNotification)
        } else {
          nextStep = question;
        }
        break;
      case results:
        // Don't need to do anything here
        break;
      default:
        // This case should not happen
        break;
    }

    // Address Quiz Changes:
    this.setState({
      currentStep: nextStep,
      score: this.state.score + addScore,
      cardIndex: nextCard,
    });
  }

  renderResultsScreen() {
    return (<View>
      <Text style={styles.questionText}>The results are in...</Text>
      <Text style={styles.questionText}>
        You scored {((this.state.score / this.props.cards.length) * 100).toFixed(2)}%
      </Text>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => {this.setState({...resetState})}}>
        <Text style={styles.buttonText}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => {this.props.navigation.navigate('DeckView', { deck: {title: this.props.title, cards: this.props.cards}})}}>
        <Text style={styles.buttonText}>Back to Deck</Text>
      </TouchableOpacity>
    </View>)
  }

  renderQuestionOrAnswer() {
    return (<View>
      <View style={{flex: 1}}>
        <Text style={styles.buttonText}>{this.props.cards.length - this.state.cardIndex} questions remain</Text>
        { this.state.currentStep === question
          ? this.renderQuestion()
          : this.renderAnswer()
        }
      </View>
    </View>)
  }

  renderQuestion() {
    return (<View style={{flex: 3}}>
      <View style={styles.quizItemView}>
        <Text style={styles.questionText} >{this.props.cards[this.state.cardIndex].question}</Text>
      </View>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => this.manageQuizStep()}>
        <Text style={styles.buttonText}>Show Answer</Text>
      </TouchableOpacity>
    </View>)
  }

  renderAnswer() {
    return (<View style={{flex: 3}}>
      <View style={styles.quizItemView}>
        <Text style={styles.questionText}>Answer: {this.props.cards[this.state.cardIndex].answer}</Text>
      </View>
      <Text style={styles.questionText}>Your answer was...</Text>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => {this.manageQuizStep(true)}}>
        <Text style={styles.buttonText}>Correct!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.quizButton}
        onPress={() => {this.manageQuizStep(false)}}>
        <Text style={styles.buttonText}>Incorrect...</Text>
      </TouchableOpacity>
    </View>)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.quizView}>
          {this.state.currentStep === results
            ? this.renderResultsScreen()
            : this.renderQuestionOrAnswer()
            }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizView : {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quizItemView: {
    margin: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    color: 'black',
    fontSize: 22,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  quizButton: {
    height: 60,
    margin: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
})

function mapStateToProps (keyValueDecks, props) {
  let deck = keyValueDecks[props.navigation.state.params.title];
  return {title: props.navigation.state.params.title, cards: deck.cards};
}

export default connect(mapStateToProps)(QuizView);