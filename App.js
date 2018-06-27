import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';
import DeckView from './components/DeckView';


const MainNavigator = createStackNavigator({
  Decks: {
    screen: DeckList,
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
      <View style={styles.container}>
        <View style={{backgroundColor: 'orange', height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={'#FFA500'} barStyle='light-content'/>
        </View>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
