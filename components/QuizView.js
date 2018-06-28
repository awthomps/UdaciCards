import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


question = 'question';
answer = 'answer';
results = 'results';


class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title + ' Quiz'
    }
  }

  state = {
    cardIndex: 0,
    score: 0,
    currentStep: question,
  }



  // Power State Machine with constants
  manageQuizStep(correctAnswer) {
    let nextStep = this.state.currentStep;
    let addScore = 0;
    let nextCard = this.state.cardIndex;
    switch(quzStep(currentStep)) {
      case question:
        nextStep = answer;
        break;
      case a:
        if(correctAnswer) {
          addScore = 1;
        }
        nextCard++;

        // Has the end of the quiz been reached?
        if(nextCard <= this.props.cards.length) {
          nextCard--; // decrement to avoid any worst case oob errors.
          nextStep = results; // go to results screen state
        } else {
          nextStep = question;
        }
        break;
      case results:
        // Navigate back to deck
        break;
      default:
        // Something is wrong so navigate back to deck
        break;
    }

    // Address Quiz Changes:
    this.setState({
      currentStep: nextStep,
      score: this.state.score + addScore,
      cardIndex: nextCard,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.quizView}>
          {this.state.currentStep === results
            ? <View>
                <Text>results</Text>
              </View>
            : ( this.state.currentStep === question
                ? <View>
                    <Text style={styles.questionText} >{this.props.cards[this.state.cardIndex].question}</Text>
                  </View>
                : <View>
                    <Text>Your answer was...</Text>
                  </View>
              )
            }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizView : {
    height: 100,
    margin: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    color: 'white',
    fontSize: 22,
  },
  deckCardsText: {
    color: 'black',
    fontSize: 18,
  }
})

function mapStateToProps (keyValueDecks, props) {
  let deck = keyValueDecks[props.navigation.state.params.title];
  return {title: props.navigation.state.params.title, cards: deck.cards};
}

export default connect(mapStateToProps)(QuizView);