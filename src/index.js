import React from 'react';
import firebase from './firebase';
import 'firebase/auth';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import fireReducer from './reducers/firestore-reducer';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './components/App';

const store = createStore(fireReducer);

const rrfProps = {
	firebase,
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true,
	},
	dispatch: store.dispatch,
	createFirestoreInstance,
};
ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
