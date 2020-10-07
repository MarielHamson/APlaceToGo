import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { Container, TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		// color: '#1e0253',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		margin: 'auto',
	},

	label: {
		textTransform: 'capitalize',
	},
})(Button);

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		background: '#1e0253',
		border: '#e9e9e9',
	},
	image: {
		backgroundImage: `url(${process.env.PUBLIC_URL}/ocean.jpeg)`,
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
		width: '75%',
		marginTop: theme.spacing(1),
		color: 'lightcoral',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function ReusableForm(props) {
	const classes = useStyles();
	const { bathroomName } = props;

	return (
		<React.Fragment>
			<Container>
				<Grid container component="main" className={classes.root}>
					<CssBaseline />
					<Grid item xs={false} sm={4} md={7} className={classes.image} />
					<Grid
						item
						xs={12}
						sm={8}
						md={5}
						component={Paper}
						elevation={6}
						square
					>
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								<BathtubIcon />
							</Avatar>
							<form
								className={classes.form}
								onSubmit={props.formSubmissionHandler}
							>
								<TextField
									variant="outlined"
									fullWidth
									margin="normal"
									required
									id="name"
									name="name"
									label="Name"
									autoComplete="name"
									autoFocus
									defaultValue={bathroomName}
									placeholder="Local Supermarket"
								/>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									required
									label="Street"
									id="street"
									name="street"
									autoComplete="street"
									autoFocus
									defaultValue={props.street}
									placeholder="1000 E Burnside"
								/>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									required
									id="city"
									name="city"
									label="City"
									autoFocus
									autoComplete="city"
									placeholder="Portland"
									defaultValue={props.city}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									required
									id="state"
									autoFocus
									autoComplete="state"
									type="text"
									name="state"
									placeholder="Oregon"
									defaultValue={props.state}
								/>

								<TextField
									variant="outlined"
									margin="normal"
									required
									id="accessible"
									fullWidth
									autoFocus
									autoComplete="accessible"
									name="accessible"
									placeholder="Yes"
									label="Accessible"
									defaultValue={props.accessible}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									type="text"
									name="unisex"
									autoComplete="unisex"
									label="Gender Neutral"
									autoFocus
									placeholder="Yes"
									defaultValue={props.unisex}
								/>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									required
									name="directions"
									label="Directions"
									placeholder="Restroom is in the back, past the cheese"
									autoComplete="directions"
									autoFocus
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									as="textarea"
									name="comment"
									label="Comments"
									placeholder="The staff is cool even if you don't buy"
								/>
								<StyledButton
									className="mb-2 buttons"
									variant="info"
									type="submit"
								>
									{props.buttonText}
								</StyledButton>
							</form>
						</div>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string,
	bathroomName: PropTypes.string,
};

export default ReusableForm;
