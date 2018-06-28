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
          backgroundColor: 'orange',
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
  }
})

export default class App extends React.Component {
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
    backgroundColor: '#fff',
  },
});