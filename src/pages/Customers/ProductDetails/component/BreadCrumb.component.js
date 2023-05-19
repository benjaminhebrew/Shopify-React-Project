import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	link: {
		textDecoration: 'none',
		color: 'black'
	}
}));

export function BreadCrumb(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>

			<Breadcrumbs separator={<ArrowBackIosSharpIcon fontSize="small" />} aria-label="breadcrumb">
				<Link className={classes.link} to={`/home`} >
					Main Page
				</Link>
				<Link className={classes.link} to={`/home/${props.group}/${props.subgroup}`} >
					{props.subgroup}
				</Link>
				<Typography color="textSecondary">
					{props.name}
				</Typography>
			</Breadcrumbs>
		</div>
	);
}