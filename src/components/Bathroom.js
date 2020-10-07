import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import location96 from './../assets/images/location96.svg';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#e9e9e9, opacity: 100%',
		opacity: '.85',
		boxShadow: 'inset (0, 0, 50px, #fff)',
		boxShadow: 'inset (20px, 0, 80px, #f0f)',
		boxShadow: 'inset (-20px, 0, 80px, #0ff)',
		boxShadow: 'inset (20px, 0, 300px, #f0f)',
		boxShadow: 'inset (-20px, 0, 300px, #0ff)',
		boxShadow: '0 0 50px #fff',
		boxShadow: '-10px 0 80px #f0f',
		boxShadow: '10px 0 80px #0ff',
	},
	title: {
		fontSize: 20,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	image: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '50%',
	},
}));

function Bathroom(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.paper}>
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
						<Tooltip title="Details" arrow>
							<img
								className={classes.image}
								src={location96}
								alt="address"
								onClick={() => props.whenBathroomClicked(props.id)}
							/>
						</Tooltip>
					</CardActions>
				</Card>
				<hr />
			</div>
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
