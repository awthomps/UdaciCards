import { AsyncStorage } from 'react-native'


const DECKS_STORAGE_KEY = 'UdaciCards:decks';

function setDummyDecks() {
  let dummyDecks = {};
  dummyDecks['Basic Japanese'] = {
    title: 'Basic Japanese',
    cards: [],
  }
  dummyDecks['React'] =  {
    title: 'React',
    cards: [],
  }
  return dummyDecks;
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks);
}

function formatDecks(decks) {
  return decks === null
    ? setDummyDecks()
    : JSON.parse(decks)
}