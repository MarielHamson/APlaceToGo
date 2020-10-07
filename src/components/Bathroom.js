import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import address from './../assets/images/address.png';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		fontSize: 20,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

function Bathroom(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container component="main" className={classes.root} spacing={10}>
				<CssBaseline />
				<Grid item med={false} sm={4} md={7} className={classes.image} />
				<Grid item med={12} sm={8} md={5} spacing={3}>
					<div className={classes.paper}></div>
					<Card className={classes.root}>
						<CardContent>
							<Typography variant="h5" component="h2">
								{props.name}
							</Typography>
							<Typography variant="body2" component="p">
								{props.street} <br />
							</Typography>
						</CardContent>
						<CardActions>
							<StyledButton
								variant="outlined"
								size="lg"
								onClick={() => props.whenBathroomClicked(props.id)}
							>
								{' '}
								See Details{' '}
							</StyledButton>
							<Tooltip title="Details" arrow>
								<img
									src={address}
									alt="address"
									onClick={() => props.whenBathroomClicked(props.id)}
								/>
							</Tooltip>
						</CardActions>
					</Card>
					<hr />
				</Grid>
			</Grid>

			{/* <Grid item med>
					<Paper className={classes.paper}>med</Paper>
				</Grid>
				<Grid item med>
					<Paper className={classes.paper}>med</Paper>
				</Grid>
				<Grid item med>
					<Paper className={classes.paper}>med</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={10}>
				<Grid item med>
					<Paper className={classes.paper}>med</Paper>
				</Grid>
				<Grid item med={6}>
					<Paper className={classes.paper}>med=6</Paper>
				</Grid>
				<Grid item med>
					<Paper className={classes.paper}>med</Paper>
				</Grid>
			</Grid> */}
		</React.Fragment>
	);
}

Bathroom.propTypes = {
	name: PropTypes.string,
	street: PropTypes.string,
	upvote: PropTypes.number,
	id: PropTypes.string,
	whenBathroomClicked: PropTypes.func,
};

export default Bathroom;
