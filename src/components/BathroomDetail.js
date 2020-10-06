import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const StyledButton = withStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		// color: '#1e0253',
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
		height: '100vh',
		background: '#c637a0',
	},
	image: {
		backgroundImage: `url(${process.env.PUBLIC_URL}/potty.jpeg)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'right',
		background: '#c637a0',
		fontFamily: 'Montserrat',
	},
	gridContainer: {
		paddingLeft: '40px',
		paddingRight: '40px',
	},
}));

function BathroomDetail(props) {
	const { bathroom, onClickingDelete } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} elevation={6} square>
					<div className={classes.paper}>
						<h1>Bathroom Details</h1>
						<h2 class="details">
							{bathroom.name} - {bathroom.street}, {bathroom.state}
						</h2>
						<p class="details">Accessible: {bathroom.accessible}</p>
						<p class="details">Gender Neutral: {bathroom.unisex}</p>
						<p class="details">Directions: {bathroom.directions} </p>
						<p class="details">Comments: {bathroom.comment}</p>

						<StyledButton
							className="mr-2"
							variant="info"
							onClick={props.onClickingEdit}
						>
							Edit Bathroom Details
						</StyledButton>
						<br />
						<StyledButton
							className="mr-2"
							variant="info"
							onClick={() => onClickingDelete(bathroom.id)}
						>
							Delete Bathroom from List
						</StyledButton>

						<hr />
					</div>
				</Grid>
			</Grid>
			)
		</React.Fragment>
	);
}

BathroomDetail.propTypes = {
	bathroom: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
};

export default BathroomDetail;
