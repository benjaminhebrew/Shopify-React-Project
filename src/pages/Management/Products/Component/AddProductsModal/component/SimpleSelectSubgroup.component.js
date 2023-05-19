import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export function SimpleSelectSubgroup(props) {
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			width: '100%'
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();


	const handleChange = async (event, eventInfo) => {

		const subgroup = event.target.value
		const subgroupfa = eventInfo.props.children

		props.value({ subgroup, subgroupfa })

	};

	return (
		<div>

			<FormControl size='small' variant="outlined" className={classes.formControl}>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					onChange={handleChange}
				>

					<MenuItem value={'bread'}>Bread</MenuItem>
					<MenuItem value={'rice'}>Rice</MenuItem>
					<MenuItem value={'oil'}>Oil </MenuItem>
					<MenuItem value={'sugar'}>Sugar </MenuItem>

					<MenuItem value={'yogurt'}>yogurt</MenuItem>
					<MenuItem value={'milk'}>Milk</MenuItem>
					<MenuItem value={'dough'}>Buttermilk </MenuItem>
					<MenuItem value={'butter'}>Animal and vegetable butter </MenuItem>

					<MenuItem value={'beef'}>Beef and veal</MenuItem>
					<MenuItem value={'chicken'}>Chicken</MenuItem>
					<MenuItem value={'egg'}>Egg </MenuItem>
					<MenuItem value={'fish'}>Fish, shrimp and caviar </MenuItem>

					<MenuItem value={'coffee'}>Coffee</MenuItem>
					<MenuItem value={'coco'}>Hot chocolate</MenuItem>
					<MenuItem value={'tea'}>Tea </MenuItem>
					<MenuItem value={'juice'}>Juice </MenuItem>
				</Select>
			</FormControl>

		</div>
	);
}