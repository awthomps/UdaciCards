import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import { Constants } from 'expo';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import DeckView from './components/DeckView';
import AddDeckView from './components/AddDeckView';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView'
import { setLocalNotification } from './utils/helpers'


// Attempt to clean up this isMounted bug.
global.__old_console_warn = global.__old_console_warn || console.warn;
global.console.warn = str => {
  let tst = (str || '') + '';
  if (tst.startsWith('Warning: isMounted(...) is deprecated')) {
    return;
  }
  return global.__old_console_warn.apply(console, [str]);
};

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarOptions : {
        style: {
          backgroundColor: 'orange',
        }
      }
    }
  },
  AddDeck: {
    screen: AddDeckView,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarOptions : {
        style: {
          backgroundColor: 'pink',
        }
      }
    }
  },
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red',
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'lightblue',
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'blue',
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    debugger
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <View style={{backgroundColor: 'orange', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={'#FFA500'} barStyle='light-content'/>
          </View>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});