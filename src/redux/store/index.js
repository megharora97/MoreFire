import { createStore, applyMiddleware } from 'redux';
import Reducer from '../reducers/actionreducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

export const Data = {
  Matches: [
    {
        event: "OMNI Fun Day",
        contest: "Darts",
        rounds: [
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            }
        ]
    },
    {
        event: "Rotary club",
        contest: "Darts",
        rounds: [
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            }
        ]
    },
    {
        event: "OMNI Fun Day",
        contest: "BasketBall",
        rounds: [
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            },
            {
                p1: +2,
                p2: -2
            }
        ]
    },
  ],
  Filters: {
    Events: [
      { value: 'OMNI Fun Day', Checked: false },
      { value: 'Rotary Club Event', Checked: false },
      { value: 'Placeholder Name', Checked: false },
    ],

  Contest: [
      { value: 'BasketBall', path: 'Contest' },
      { value: 'Darts', path: 'Contest' },
      { value: 'CornHole', path: 'Contest' },
      { value: 'Frisbee Toss', path: 'Contest' },
    ],


  Player: [
      { value: 'Player1', Checked: false },
      { value: 'Player2', Checked: false },

    ],

  Points: [
      { value: '0-5', Checked: false },
      { value: '5-25', Checked: false },
      { value: '25-100', Checked: false },
      { value: '100+', Checked: false },
    ],

  }
}




export const store = createStore(persistedReducer, Data, applyMiddleware(thunk));
export const persistor = persistStore(store);
