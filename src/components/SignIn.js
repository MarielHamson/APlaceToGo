import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import firebase from '../firebase';
import signup from '../assets/images/signup.svg';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: '#1e0253',
		height: 48,
		padding: '0 30px',
		boxShadow: 'inset (0, 0, 50px, #fff)',
		boxShadow: 'inset (20px, 0, 80px, #f0f)',
		boxShadow: 'inset (-20px, 0, 80px, #0ff)',
		boxShadow: 'inset (20px, 0, 300px, #f0f)',
		boxShadow: 'inset (-20px, 0, 300px, #0ff)',
		boxShadow: '0 0 50px #fff',
		boxShadow: '-10px 0 80px #f0f',
		boxShadow: '10px 0 80px #0ff',
	},
	label: {
		textTransform: 'capitalize',
	},
})(Button);

function Copyright() {
	return (
		<Typography variant="body2" color="lightgrey" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				A Place To Go
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		background: '#1e0253',
	},
	image: {
		backgroundImage: `url(${process.env.PUBLIC_URL}/Original.png)`,
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#1e0253',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
		color: 'lightcoral',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignIn() {
	const classes = useStyles();
	const [error, setError] = useState(null);

	function doSignUp(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function () {
				setError(null);
				firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(function () {
						history.push('/');
					});
			})
			.catch((error) => {
				setError(error);
			});
	}

	function doSignIn(event) {
		event.preventDefault();
		const email = event.target.signinEmail.value;
		const password = event.target.signinPassword.value;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(function () {
				setError(null);
				history.push('/');
			})
			.catch((error) => {
				setError(error);
			});
	}

	let history = useHistory();

	return (
		<React.Fragment>
			{/* <Header /> */}
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar} src={signup}></Avatar>
						<div id="signup">
							<Typography component="h1" variant="h5">
								Sign Up
							</Typography>
						</div>
						<form className={classes.form} validate onSubmit={doSignUp}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<StyledButton
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign Up
							</StyledButton>
							{error && error.message}
						</form>
						<div id="signin">
							<Typography component="h1" variant="h5">
								Sign In
							</Typography>
						</div>
						<form className={classes.form} validate onSubmit={doSignIn}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="signinEmail"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="signinPassword"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<StyledButton
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</StyledButton>
							{error && error.message}
						</form>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password? That sucks.
								</Link>
								<Grid item>
									<Link href="#" variant="body2">
										{"Don't have an account? Sign Up Above"}
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Box mt={8}>
							<Copyright />
						</Box>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
export default SignIn;
