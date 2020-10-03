import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function Bathroom(props) {
	// 	const myStyledList = {
	// 		listStyle: 'none',
	// 		cursor: 'pointer',
	// 	};
	const classes = useStyles();
	// const bull = <span className={classes.bullet}>•</span>;

	return (
		<React.Fragment>
			{/* <div onClick={() => props.whenBathroomClicked(props.id)}> */}
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Bathroom
					</Typography>
					<Typography variant="h5" component="h2">
						{props.name}
					</Typography>
					<Typography variant="body2" component="p">
						{props.street} <br /> {props.upvote} upvotes{' '}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="lg" onClick={() => props.whenBathroomClicked(props.id)}>
						{' '}
						See Details{' '}
					</Button>
				</CardActions>
				{/* <Card.Body>
						<Card.Title className="text-muted">{props.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{props.street}
						</Card.Subtitle>
						<Card.Text className="text-muted">
							{props.upvote} upvotes{' '}
						</Card.Text>
					</Card.Body> */}
			</Card>
			{/* </div> */}
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
