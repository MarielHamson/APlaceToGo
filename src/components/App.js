import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import BathroomControl from './BathroomControl';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#c637a0',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
}

export default App;
