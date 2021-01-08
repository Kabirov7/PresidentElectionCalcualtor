import React, {useEffect, useState} from 'react';
import {Slider, makeStyles, Typography, Grid} from "@material-ui/core";
import './form.css'

const useStyles = makeStyles({
	root: {
		// width: "90%",
		// alignItems: "center",
		paddingTop: "25px",

	},
	input: {
		width: 42,
	},
	text: {
    fontSize: "18px",
		fontFamily: "Roboto",
		fontWeight: "700",
	},
	supportText: {
		fontFamily: "Roboto",
		fontWeight: "300",

	}
});


export default function Slider_(props) {
	const [value, setValue] = useState(50);
	const classes = useStyles();

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
		props.returnRange(newValue);
	};

	let lastName = props.candidate.split(" ")[1]
	let male = lastName[lastName.length - 1];


	return (<div className={classes.root} style={{fontFamily: "Roboto"}}>
			<Typography className={classes.text}>
				Сколько людей должно проголосовать за других кандидатов или против всех,
				чтобы {props.candidate} не {male=="а" ? "выиграла" : "выиграл"} в
				первом туре президентских выборов?
			</Typography>
			<Typography
				className={classes.supportText}
			>
				Выберите, какой окажется явка (в процентах)
			</Typography>
			<Grid container spacing={2} alignItems="center">
				<Grid item xs>
					<Slider
						valueLabelDisplay="auto" aria-label="pretto slider"
						value={typeof value === 'number' ? value : 0}
						onChange={handleSliderChange}
					/>
				</Grid>
			</Grid>
		</div>
	);
}