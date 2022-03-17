import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/styles";
import PeopleIcon from "@material-ui/icons/People";
import EmailIcon from "@material-ui/icons/Email";
import Skeleton from "@material-ui/lab/Skeleton";

function Loading(props) {
	const useStyles = makeStyles({
		root: {
			width: "300px",
		},
		icon: {
			verticalAlign: "middle",
		},
	});
	const classes = useStyles();
	return (
		<div>
			<div className="profile-container">
				<div className="images">
					<Skeleton variant="circle" width={180} height={180}>
						<img src={props.image} alt="" />
					</Skeleton>

					<br />
					<br />
					<Skeleton height={20} width="100%">
						<div>
							<LinkIcon className={classes.icon} /> {props.url}
						</div>
					</Skeleton>
				</div>
				<div className="profile-info" style={{ marginLeft: "4rem" }}>
					<Skeleton height={35} width="150%">
						<h2>{props.name}</h2>
					</Skeleton>
					<Skeleton height={15} width="250%">
						{props.bio && <p className="profile-bio"> {props.bio}</p>}
					</Skeleton>
					<Skeleton height={15} width="140%">
						{props.location && (
							<p>
								<LocationOnIcon className={classes.icon} /> {props.location}
							</p>
						)}
					</Skeleton>
					<Skeleton height={15} width="140%">
						{props.email && (
							<p>
								<EmailIcon className={classes.icon} /> {props.email}
							</p>
						)}
					</Skeleton>
					<Skeleton height={15} width="140%">
						<p>
							<PeopleIcon className={classes.icon} /> {props.followers}{" "}
							followers
						</p>
					</Skeleton>
				</div>
			</div>
		</div>
	);
}

export default Loading;
