import React from 'react';
import BathroomControl from './BathroomControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#c637a0',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
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
