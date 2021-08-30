import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import BathroomControl from './BathroomControl';
import '@carto/airship-style/dist/airship.css';
import { defineCustomElements } from '@carto/airship-components/dist/loader';

// const theme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			main: '#c637a0',
// 		},
// 	},
// });

defineCustomElements(window);

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
