import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
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

const useStyles = makeStyles((theme) => ({
	root: {
		background: `url(${process.env.PUBLIC_URL}/background80.jpg)`,
		size: '20px',
		overflowY: 'scroll',
	},

	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		alignItems: 'right',
		background: `url(${process.env.PUBLIC_URL}/background80.jpg)`,
		fontFamily: 'Montserrat',
		color: 'white',
		fontSize: '20px',
	},
	gridContainer: {
		paddingLeft: '80px',
		paddingRight: '80px',
	},
	headline: {
		fontFamily: 'Sacramento, cursive',
		fontWeight: '500',
		fontSize: '50px',
		color: 'white',
	},
}));

function BathroomDetail(props) {
	const { bathroom, onClickingDelete } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<Container>
				<p className={classes.headline}>Bathroom Details</p>
				<p className={classes.paper}>
					{bathroom.name} - {bathroom.street}, {bathroom.state}
				</p>
				<p className={classes.paper}>Accessible: {bathroom.accessible}</p>
				<p className={classes.paper}>Gender Neutral: {bathroom.unisex}</p>
				<p className={classes.paper}>Directions: {bathroom.directions} </p>
				<p className={classes.paper}>Comments: {bathroom.comment}</p>
				<StyledButton
					className="mr-2"
					variant="info"
					onClick={props.onClickingEdit}
				>
					Edit Bathroom Details
				</StyledButton>
				<br />
				<br />
				<StyledButton
					className="mr-2"
					variant="info"
					onClick={() => onClickingDelete(bathroom.id)}
				>
					Delete Bathroom from List
				</StyledButton>
			</Container>
		</React.Fragment>
	);
}

BathroomDetail.propTypes = {
	bathroom: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
};

export default BathroomDetail;
