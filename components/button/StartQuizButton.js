import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class StartQuizButton extends Component {

  render() {
    return (
      <TouchableOpacity
      key={this.props.title}
      style={styles.startQuizView}
      onPress={() => {
        this.props.navigation.navigate(
          'QuizView',
          { title: this.props.title }
        )
      }}>
        <Text style={styles.startQuizText}>Start Quiz</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  startQuizView: {
    height: 60,
    margin: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startQuizText: {
    color: 'white',
    fontSize: 22,
  },
  
})

export default connect()(StartQuizButton);