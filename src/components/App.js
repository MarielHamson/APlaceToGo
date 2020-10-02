import React from 'react';
import BathroomControl from './BathroomControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signin">
					<SignIn />
				</Route>
				<Route path="/">
					<BathroomControl />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
