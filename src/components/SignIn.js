import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import firebase from '../firebase';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: '#1e0253',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
		backgroundImage: 'url(https://source.unsplash.com/featured/?{bathroom})',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
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
		backgroundColor: theme.palette.secondary.main,
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

	function doSignUp(event) {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const nickname = event.target.nickname.value;

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function () {
				console.log('Successfully signed up!');
			})
			.catch(function (error) {
				console.log(error.message);
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
				console.log('Successfully signed in!');
				history.push('/');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	let history = useHistory();

	return (
		<React.Fragment>
			<Header />
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<div id="signup">
							<Typography component="h1" variant="h5">
								Sign Up
							</Typography>
						</div>
						<form className={classes.form} noValidate onSubmit={doSignUp}>
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
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="nickname"
								label="Name"
								type="text"
								id="nickname"
								autoComplete="nickname"
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
						</form>
						<div id="signin">
							<Typography component="h1" variant="h5">
								Sign In
							</Typography>
						</div>
						<form className={classes.form} noValidate onSubmit={doSignIn}>
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
						</form>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
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
