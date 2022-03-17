import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
function Repos(props) {
	const [loading, SetLoading] = React.useState(true);
	React.useEffect(() => {
		const timer = setTimeout(() => {
			SetLoading(false);
		}, 500);
		return () => clearTimeout(timer);
	}, []);
	const useStyles = makeStyles({
		root: {
			Width: "100%",
			height: "100%",
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "column",
		},

		flex1: {
			display: "flex",
			justifyContent: "space-between",
			marginBottom: "20px",
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
		tag: {
			color: "white",
			backgroundColor: "#e91e63",
			marginLeft: "12px",
			padding: "5px 6px",
			borderRadius: "5px",
			fontSize: "13px",
		},
		tag1: {
			fontSize: "12px",
			backgroundColor: "#69f0ae",
			padding: "5px 10px",
			border: "2px solid #009688",
			borderRadius: "50px",
			color: "#37474f",
			textTransform: "capitalize",
		},
		content: {
			paddingLeft: "20px",
		},
		actiondown: {
			margin: "15px 0 5px",
		},
	});
	const classes = useStyles();
	/*============= printing each Topic ================*/
	const Topicstags = props.topics.slice(0, 4).map((topic) => (
		<span className={classes.tag} id="tags">
			{topic}
		</span>
	));
	return (
		<Card className={classes.root} elevation={4}>
			<CardContent className={classes.content}>
				{/*=================== Repository name =======================*/}
				<Typography variant="h5" component="h2" className={classes.flex1}>
					{loading ? (
						<Skeleton>
							<div className="">{props.name}</div>
						</Skeleton>
					) : (
						<div className="repo-name">{props.name}</div>
					)}
					{/*=================== Repository Public visibility =======================*/}
					{loading ? (
						<Skeleton width="10%"></Skeleton>
					) : (
						<div className={classes.tag1}>
							{props.visibility}
						</div>
					)}
				</Typography>
				{/*=================== Repository Description =======================*/}
				<Typography variant="body2" component="p">
					{loading ? <Skeleton></Skeleton> : <div className="repo-des">{props.description}</div>}
				</Typography>
			</CardContent>
			{/*=================== Repository languages and Topics =======================*/}
			{loading ? (
				<Skeleton style={{ margin: "0 40px 30px 20px" }}></Skeleton>
			) : (
				<CardActions className={classes.actiondown}>
					{Topicstags}
					{props.language && (
						<span className={classes.tag} id="tags">
							{props.language}
						</span>
					)}
				</CardActions>
			)}
		</Card>
	);
}

export default Repos;
