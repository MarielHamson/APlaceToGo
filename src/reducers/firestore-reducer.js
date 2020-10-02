import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const fireReducer = combineReducers({ firestore: firestoreReducer });

export default fireReducer;