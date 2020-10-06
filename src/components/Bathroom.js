import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core';
import address from './../assets/images/address.png';
import Tooltip from '@material-ui/core/Tooltip';

// const StyledButton = withStyles({
// 	root: {
// 		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// 		borderRadius: 3,
// 		border: 0,
// 		color: '#1e0253',
// 		height: 48,
// 		padding: '0 30px',
// 		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// 	},
// 	label: {
// 		textTransform: 'capitalize',
// 	},
// })(Button);

const useStyles = makeStyles({
	root: {
		minWidth: 400,
		// maxWidth: 400,
		background: 'lightgrey',
	},
	title: {
		fontSize: 20,
	},
	pos: {
		marginBottom: 12,
	},
});

function Bathroom(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
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
					{/* <StyledButton
						variant="outlined"
						size="lg"
						onClick={() => props.whenBathroomClicked(props.id)}
					>
						{' '}
						See Details{' '}
					</StyledButton> */}
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
