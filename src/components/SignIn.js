import React from 'react';
import firebase from 'firebase/app';
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

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
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

	// function doSignOut() {
	// 	firebase
	// 		.auth()
	// 		.signOut()
	// 		.then(function () {
	// 			console.log('Successfully signed out!');
	// 			history.push('/');
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.message);
	// 		});
	// }

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
						<Typography component="h1" variant="h5">
							Sign Up
						</Typography>
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
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign Up
							</Button>
							{/* <Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={doSignOut}
						>
							Sign out
						</Button> */}
						</form>
						<Typography component="h1" variant="h5">
							Sign In
						</Typography>
						<form className={classes.form} noValidate onSubmit={doSignIn}>
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
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
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
